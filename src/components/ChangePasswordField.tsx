import React, {useState} from 'react';
// import { useDispatch, connect } from 'react-redux';
import styled from 'styled-components';

import {Typography} from '@material-ui/core';

// import { AppStateType } from '../redux/rootReducer';
import BtnMain from './BtnMain';
import OpenTip from './OpenTip';
import InputPassword from './InputPassword'
import { useDispatch } from 'react-redux';
import { apdatePassword } from '../redux/actions';

const StyledDiv = styled.div`
    padding-bottom: 70px;
`
const ChangePasswordField: React.FC<any> = () => {

    const dispatch = useDispatch()

    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<String>('')//повторить пароль
    const [openTip, setOpenTip] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => { //записать данные из формы 
        setPassword(event.target.value)
        setOpenTip("") //закрыть всплывающее окно
    }

    const changeConfPassHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (password===event.target.value) { //закрыть всплывающее окно
          setOpenTip("")
        }
        setConfirmPassword(event.target.value);
    }

    const savePasswordHandler = async () => {
        if (!password.trim() || password.length<6) {
            setOpenTip("Минимальная длина пароля 6 символов") //открыть всплывающее окно
            return
        }
  
        if (password!==confirmPassword) {
          setOpenTip("Пароли не совпадают, введите ещё раз") //открыть всплывающее окно
          return
        }

        setLoading(true)
        try {
            await dispatch(apdatePassword(password))
            setOpenTip('Пароль изменён')
        } catch (error) {
            console.log(error)
            switch (error.code) {
                case "auth/network-request-failed":
                    setOpenTip('Ошибка соединения')
                break;
                case "auth/requires-recent-login":
                    setOpenTip('Эта операция является конфиденциальной и требует недавней аутентификации. Войдите в систему еще раз используя прежний пароль и повторите этот запрос.')
                break;
                  
                default:
                    setOpenTip(error.message)
                break;
            }
        }
        setLoading(false)
    }
        
    return (
        <StyledDiv className="col-xl-6">
            <Typography variant="h4" gutterBottom>Смена пароля</Typography>
            <Typography variant="body1" gutterBottom>Используйте запоминающиеся пароли. Хороший пароль состоит из 6 и более символов, содержит буквы и цифры.</Typography>
            <InputPassword mode="SignUp" cbChangeForm={changeHandler}/>
            <InputPassword mode="SignUp" confirm={true} cbChangeForm={changeConfPassHandler}/>
            <BtnMain text='СОХРАНИТЬ НОВЫЙ ПАРОЛЬ' cbHendler={savePasswordHandler} disabled = {loading}/>
            {openTip ?  <OpenTip text={openTip}/> : null}
        </StyledDiv>
    )
    
}

export default ChangePasswordField;
