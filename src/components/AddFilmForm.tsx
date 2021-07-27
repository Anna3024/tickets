import React from 'react';

import {Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BtnMain from './BtnMain'

const useStyles = makeStyles((theme) => ({
    input: {
      width: "100%",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      },
}));

const AddFilmForm:React.FC = () => {

    const classes = useStyles();

    return (
        <>
        <Grid direction="column" item xs={12}>
            <TextField 
                className={classes.input }  
                label="Название фильма"
                name="movieTitle" 
                // value = {form.surname}
                onChange={()=>{}}
            />
            <br/>
            <TextField 
                className={classes.input}  
                label="Жанр"
                name="filmType" 
                // value = {form.surname}
                onChange={()=>{}}
            />
            <TextField 
                className={classes.input}  
                label="Возрастное ограничение"
                name="ageLimit" 
                // value = {form.surname}
                onChange={()=>{}}
            />
            <TextField 
                className={classes.input}  
                label="Продолжительность"
                name="time" 
                // value = {form.surname}
                onChange={()=>{}}
            />
            <TextField
                className={classes.input} 
                label="Описание фильма"
                multiline
                // value={value}
                onChange={()=>{}}
            />
            <TextField 
                className={classes.input}  
                label="Изображение карточки"
                name="cardImg" 
                // value = {form.surname}
                onChange={()=>{}}
            />
            <TextField 
                className={classes.input}  
                label="Изображение на странице"
                name="pageImg" 
                // value = {form.surname}
                onChange={()=>{}}
            />
            <BtnMain text='ДОБАВИТЬ ФИЛЬМ' cbHendler={()=>{}}/>
        </Grid>
        </>
    )

}

export default AddFilmForm