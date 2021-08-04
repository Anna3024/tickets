import React, {useState, useEffect} from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from 'react-bootstrap/Alert'

import { useHttp } from "../hooks/http.hook";

import BtnMain from './BtnMain'

const useStyles = makeStyles((theme) => ({
    input: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
}));

const AddAdminForm:React.FC = () => {

    const classes = useStyles();

    const {loading, request, error, clearError}  = useHttp();

    const [users, setUsers] = useState([])
    const [email, setEmail] = useState("")
    const [alertMessage, setAlertMessage] = useState<any>("") //окошко с подсказкой
    const [successMessage, setSuccessMessage] = useState<any>("") 

    useEffect(()=>{
        if (typeof(error)=='string') {
            setAlertMessage(error) 
        }
    }, [error])

    const handleClickShowUsers = async() => { 
        setAlertMessage("")
        try {
            const data = await request('/api/admin/showusers', 'GET')
            setUsers(JSON.parse(JSON.stringify(data)))
        } catch (error) {
            console.log("Error getting document:", error)
        }
    };

    const changeHandlerInputField = (event: React.ChangeEvent<HTMLInputElement>) => { 
        clearError()
        setEmail(event.target.value)
        setAlertMessage("") //закрыть всплывающее окно
        setSuccessMessage("")
    }

    const addAdminHandler = async () =>{
        setAlertMessage("")
        if (!email.trim()) {
            setAlertMessage("Введите email") //открыть всплывающее окно
            return
        }

        try {
            await request('/api/admin/addadmin', 'POST', {email: email.toLowerCase()})
            setSuccessMessage('Администратор добавлен')
            clearError()
            setEmail("")
        } catch (error) {
            console.log("Error ", error)
        }
    }

    return (
        <>      
            {users.length>1 && 
            <Alert variant="primary" style={{position: 'absolute'}}>Всего зарегистрировано пользователей - {users.length}</Alert>}
            <BtnMain text='Количество пользователей' cbHendler={handleClickShowUsers} disabled={loading}/>
            <hr/>
            <TextField 
                className={classes.input}  
                label="E-mail пользователя"
                name="newAdminEmail" 
                value = {email}
                onChange={changeHandlerInputField}
            />
            <BtnMain text='ДОБАВИТЬ АДМИНА' cbHendler={addAdminHandler} disabled={loading}/>
            {alertMessage && <Alert variant="danger" className="mt-2">{alertMessage}</Alert>}
            {successMessage && <Alert variant="success" className="mt-2">{successMessage}</Alert>}
            
            
        </>
    )

}

export default AddAdminForm