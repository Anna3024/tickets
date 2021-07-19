import React, {useState} from 'react';
import { useDispatch, connect } from 'react-redux';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography} from '@material-ui/core';

import { AppStateType } from '../redux/rootReducer';
import BtnMain from './BtnMain';
import OpenTip from './OpenTip';
import { apdateEmail } from '../redux/actions';

const StyledDiv = styled.div`
    padding-bottom: 70px;
`

const useStyles = makeStyles((theme) => ({
    input: {
      width: "100%",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
}));

const ChangeEmailField: React.FC<any> = ({userData}) => {

    const classes = useStyles();
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>(userData.email)
    const [openTip, setOpenTip] = useState<string>("")

    const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        setOpenTip('')
    }

    const saveEmailHandler = async () => {

        if (!email.trim()) {
            setOpenTip("Введите email") //открыть всплывающее окно
            return
        }
        try {
            await dispatch(apdateEmail(email))
            setOpenTip('E-mail изменён')
        } catch (error) {
            console.log(error)
            switch (error.code) {
                case "auth/network-request-failed":
                    setOpenTip('Ошибка соединения')
                break;
                case "auth/invalid-email":
                    setOpenTip('Некорректный email')
                  break;
                case "auth/email-already-in-use":
                    setOpenTip('Пользователь с таким email уже зарегестрирован')
                  break;
                case "auth/requires-recent-login":
                    setOpenTip('Эта операция является конфиденциальной и требует недавней аутентификации. Войдите в систему еще раз используя прежний e-mail и повторите этот запрос.')
                break;
                  
                default:
                    setOpenTip(error.message)
                break;
            }
        }
    }
        
    return (
        <StyledDiv className="col-xl-6">
            <Typography variant="h4" gutterBottom>Смена e-mail</Typography>
            <TextField 
                className={classes.input}  
                label="E-mail"
                name="email" 
                value={email}
                onChange={changeEmailHandler}
            />
            <BtnMain text='СОХРАНИТЬ НОВЫЙ E-MAIL' cbHendler={saveEmailHandler}/>
            {openTip ?  <OpenTip text={openTip}/> : null}
        </StyledDiv>
    )
    
}

const mapStatetoProps  = (state:AppStateType) => {
    return {
      userData: state.user.userObj
    }
}
export default connect(mapStatetoProps, null)(ChangeEmailField);
