import React , { useState, useEffect } from 'react';
import styled from 'styled-components'

import {TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useHttp } from '../hooks/http.hook';
import SimpleSnackbar from './SnackBar'
import InputPassword from './InputPassword'

const Field = styled.div`
  width: 487px;
  height: 597px;
  padding: 45px;
  margin-left: 10px;
  margin-right: 20px;
  background: radial-gradient(921.5px at -68.81% -3.61%,rgba(123,122,126,.5) 0,rgba(101,100,105,0) 100%),#0072ce;
  position: relative;
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 32px;
  }
`;
const StyledBtn = styled(Button)`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 75px
`;

const useStyles = makeStyles((theme) => ({
    input: {
      width: "100%",
      marginTop: "25px",
      marginBottom: "25px"
      },
    btn: {
      color: "black",
      borderColor: "black",
      borderRadius: 0
    },
    dropdown: {
      position: 'absolute',
      bottom: 28,
      right: 0,
      left: 0,
      zIndex: 1,
      backgroundColor: 'transparent',
      textAlign: 'center'
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '25ch',
    },
  }));

type Props = {
    mode: "LogIn" | "SignUp"
}

type FormType = {
    email: string, 
    password: string
}

const LogSignField: React.FC<Props> = (props) => {

    const classes = useStyles();
    const {loading, request, error, clearError}  = useHttp();

    const [form, setForm] = useState<FormType>({
        email: '', password: ''
    })
    const [confirmPassword, setConfirmPassword] = useState<String>('')//повторить пароль
    const [openTip, setOpenTip] = useState<String>("") //окошко с подсказкой
    const [errMessage, setErrMessage] = React.useState<String>("") //сообщение с сервера

    useEffect(()=>{
      if (error!=null) {
        setErrMessage(error || '');
        clearError()
      }
    }, [error, clearError])

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => { //записать данные из формы 
        setForm({...form, [event.target.name]: event.target.value})
        setOpenTip("") //закрыть всплывающее окно
    }

    const changeConfPassHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (form.password===event.target.value) { //закрыть всплывающее окно
          setOpenTip("")
        }
        setConfirmPassword(event.target.value);
    }

    const registerHandler = async () => { //отправить форму
        if (!form.email.trim()) {
            setOpenTip("Введите email") //открыть всплывающее окно
            return
        }

        if (!form.password.trim() || form.password.length<6) {
            setOpenTip("Минимальная длина пароля 6 символов") //открыть всплывающее окно
            return
        }

        if ((props.mode==="SignUp")&&(form.password!==confirmPassword)) {
          setOpenTip("Пароли не совпадают, введите ещё раз") //открыть всплывающее окно
          return
        }

        try {
            const data = await request (`api/auth/${props.mode==="LogIn"?'login':'register'}`, 'POST', {...form}) //3 параметра: 1)URL; 2) метод; 3)передаваемые данные
            console.log('Data', data);
        } catch (e) {}
         
      }

    return (
        <Field>
        <h2>{props.mode==="LogIn"?'Вход':'Регистрация'}</h2>
        <TextField 
          className={classes.input}  
          label="E-mail"
          name="email" 
          placeholder="ВВЕДИТЕ АДРЕС ЭЛ.ПОЧТЫ" 
          onChange={changeHandler}
        />
        <br/>
        <InputPassword mode={props.mode} cbChangeForm={changeHandler}/>
        <br/>
        {props.mode==="SignUp" && (  //если регистрация
          <InputPassword mode={props.mode} confirm={true} cbChangeForm={changeConfPassHandler}/>
        )}

        <StyledBtn 
          variant="outlined" 
          className={classes.btn}
          size="large"
          onClick={registerHandler}
          disabled={loading}>
          {props.mode==="LogIn"?'ВОЙТИ':'ЗАВЕРШИТЬ РЕГИСТРАЦИЮ'}
        </StyledBtn>
        {openTip ?  <div className={classes.dropdown}>{openTip}</div> : null}
        {errMessage && (<SimpleSnackbar text = {errMessage}/>)}
      </Field>
    )

}

export default LogSignField