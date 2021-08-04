import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {TextField, FormControl, InputLabel, Select, MenuItem, Typography} from '@material-ui/core';

import OpenTip from './OpenTip';
import BtnMain from './BtnMain';

import { AppStateType } from '../redux/rootReducer';
import { addUserInfo } from '../redux/actions';

// import { database } from "../firebase"

const StyledDiv = styled.div`
    padding-bottom: 70px;
`

export type FormType = {
    surname: string, 
    name: string,
    gender: 'man'| 'woman' | 'none'
    birthday: string | null,
    phone: string
}

const useStyles = makeStyles((theme) => ({
    input: {
      width: "100%",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
      },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: 250,
    },
    btn: {
        color: "black",
        borderColor: "black",
        borderRadius: 0
    }
}));


const Profile:React.FC<any> = ({userInfo}) => {

    const classes = useStyles();
    const dispatch = useDispatch()

    const [form, setForm] = useState<FormType>({
        surname: "", 
        name: "",
        gender: 'none',
        birthday: "",
        phone: ""
    })
    const [openTip, setOpenTip] = useState<string>("") //окошко с подсказкой
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(()=>{

        if (userInfo!=null && userInfo.name && userInfo.birthday  && userInfo.phone) {
            setForm({
                surname: userInfo.name.split('/')[0], 
                name: userInfo.name.split('/')[1],
                gender: userInfo.gender,
                birthday: userInfo.birthday,
                phone: userInfo.phone
            })
        }
            
    },[userInfo])
    
    const handleDateChange = (event: React.ChangeEvent<any>) => {
        setForm({...form, birthday: event.target.value})
        setOpenTip("") //закрыть всплывающее окно
    };

    const handleChangeGender = (event: React.ChangeEvent<any>) => {
        setForm({...form, gender: event.target.value})
        setOpenTip("") //закрыть всплывающее окно
    };

    const changeHandlerInputField = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setForm({...form, [event.target.name]: event.target.value})
        setOpenTip("") //закрыть всплывающее окно
    }

    const saveProfileHandler = async () => {
        for (let key in form) {
            if (key === "surname" || key === "name" || key === "birthday" || key === "phone") {
                if (!form[key]) {
                    setOpenTip('Заполните все поля')
                    return
                }
            }
        }
        
        if (form.birthday !== null) {
            let birthday = new Date(form.birthday.split('-').join(',')).getTime()
            let now = new Date().getTime()
            if (now-birthday<567648000000) {
                setOpenTip('Участнику программы не может быть меньше 18 лет')
                return
            }
        }

        let regExpName = new RegExp(/^[a-zA-Zа-яА-Я]{1}[a-zA-Zа-яА-Я-]{0,16}[a-zA-Zа-яА-Я]{1}$/)
        if (!regExpName.test(form.surname) || !regExpName.test(form.name)) {
            setOpenTip('Фамилия и имя могут содержать только буквы')
            return
        }

        let regExpPhone = new RegExp(/^\+375(\s+)?\(?(17|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/)
        if (!regExpPhone.test(form.phone)) {
            setOpenTip('Введите телефон в формате +375XXXXXXXXX')
            return
        }

        form.phone.slice(1).split(/[-]?[(]?[)]?[(\s+)]?/).join("")

        setLoading(true)

        try {
            await dispatch(addUserInfo(form))
            setOpenTip('Изменения сохранены')

        } catch (error) {
            switch (error.code) {
                case "auth/network-request-failed":
                    setOpenTip('Ошибка соединения')
                break;
                default:
                    setOpenTip(error.message)
                break;
            }
            console.log(error)
        }

        setLoading(false)
    }

    return (
        <StyledDiv className="col-xl-6">
            <Typography variant="h4" gutterBottom>Мои данные</Typography>
            <Typography variant="body1" gutterBottom> Заполненный профиль делает вас ближе к нашей программе лояльности со скидками и бонусами.</Typography>
            <TextField 
                className={classes.input}  
                label="Фамилия"
                name="surname" 
                value = {form.surname}
                onChange={changeHandlerInputField}
            />

            <TextField 
                className={classes.input}  
                label="Имя"
                name="name" 
                value = {form.name}
                onChange={changeHandlerInputField}
            />
            <div className='row justify-content-between px-3 g-3'>
                <FormControl className="col-xl-3" >
                    <InputLabel>Пол</InputLabel>
                    <Select style={{width: '200%'}}
                    name="gender"
                    value={form.gender}
                    onChange={handleChangeGender}
                    >
                    <MenuItem value='man'>Мужской</MenuItem>
                    <MenuItem value='woman'>Женский</MenuItem>
                    <MenuItem value='none'>Не выбран</MenuItem>
                    </Select>
                </FormControl>  

                <TextField
                    name="birthday"
                    label="Дата рождения"
                    type="date"
                    className={classes.textField}
                    value={form.birthday}
                    onChange={handleDateChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />     
            </div>
            <TextField 
                className={classes.input}  
                label="Мобильный телефон"
                name="phone" 
                value = {form.phone}
                onChange={changeHandlerInputField}
            />
            <BtnMain text='СОХРАНИТЬ ИЗМЕНЕНИЯ' cbHendler={saveProfileHandler} disabled = {loading}/>
            {openTip ?  <OpenTip text={openTip}/> : null}
        
        </StyledDiv>
    )   
}

const mapStatetoProps  = (state:AppStateType) => {
    return {
      userInfo: state.user.userInfo
    }
}
export default connect(mapStatetoProps, null)(Profile);