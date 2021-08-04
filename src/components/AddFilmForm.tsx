import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import { TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from 'react-bootstrap/Alert'

import { useHttp } from "../hooks/http.hook";
import { addMovie, changeMovie } from '../redux/actionsMovie';

import app from '../firebase'
import BtnMain from './BtnMain'
// import { AppStateType } from '../redux/rootReducer';

export type FilmFormType = {
    movieTitle: string, 
    filmType: string[],
    ageLimit: string,
    time: string,
    description: string,
    cardImg: string,
    pageImg: string,
    trailer: string
}

// type Props = {
//     addMovie: (payload: {id:string, data:FilmFormType})=>any,
// }

const useStyles = makeStyles((theme) => ({
    input: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    inputFile: {
        display: 'none',
    },
    btn: {
        borderRadius: 0,
        backgroundColor: '#0072ce',
        '&:hover': {
            backgroundColor: '#d5d5d5',
            color: 'black'
        },
    },
}));



const AddFilmForm:React.FC<any> = (props) => {

    const classes = useStyles();
    
    const {loading, request, error, clearError}  = useHttp();

    const [form, setForm] = useState<FilmFormType>({
        movieTitle: props.movie?props.movie.movieTitle:"", 
        filmType: props.movie?props.movie.filmType:[],
        ageLimit: props.movie?props.movie.ageLimit:"",
        time: props.movie?props.movie.time:"",
        description: props.movie?props.movie.description:"",
        cardImg: props.movie?props.movie.cardImg:"",
        pageImg: props.movie?props.movie.pageImg:"",
        trailer: props.movie?props.movie.trailer:""
    })
    const [alertMessage, setAlertMessage] = useState<any>("")
    const [successMessage, setSuccessMessage] = useState<any>("")
    const [loadingFile, setLoadingFile] = useState<boolean>(false)

    useEffect(()=>{
        if (typeof(error)=='string') {
            setAlertMessage(error) 
        }
    }, [error])

    const changeHandlerInputField = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setForm({...form, [event.target.name]: event.target.value})
        setAlertMessage("") //закрыть всплывающее окно
        setSuccessMessage('')
    }

    const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
        setForm({...form, filmType: event.target.value as string[]})
        setAlertMessage("")
    };

    const handleChangeLimit = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAlertMessage("")
        setForm({...form, ageLimit: event.target.value as string})
    };

    const onFileChange = async (event:any) => {
        setSuccessMessage('')
        setAlertMessage("")
        setLoadingFile(true)
        const file = event.target.files[0];
        console.log(file)
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setForm({...form, [event.target.id.split('-')[0]]: (await fileRef.getDownloadURL())})
        setLoadingFile(false)
    }

    const saveFilmHandler = async () => {
        clearError()
        setAlertMessage('')
        setSuccessMessage('')

        if (!form.pageImg || !form.cardImg) {
            setAlertMessage('Загрузите изображения')
            return
        }

        for (let key in form) {
            if (key === "movieTitle" || key === "filmType" || key === "ageLimit" || key === "time" || key === "description" ) {
                if (!form[key]) {
                    setAlertMessage('Заполните все поля')
                    return
                }
            }
        }

        if (+form.time<=0 || !(Number.isInteger(+form.time))) {
            setAlertMessage('Укажите продолжительность фильма в минутах (целое положительное число)')
            return
        }

        let regExpUrl = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi)
        if (!regExpUrl.test(form.trailer)) {
            setAlertMessage('Укажите верный URL адрес видео')
            return
        }

        if (props.movie) {
            try {

                await request('/api/movie/changeMovie', 'POST', {form, id: props.movieId})
                setSuccessMessage('информация о фильме обновлена')
                props.changeMovie({id: props.movieId, data: form})
                clearError()
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                let data = await request('/api/admin/addMovie', 'POST', form)
                setSuccessMessage('Фильм добавлен')
                props.addMovie({id: data.data, data: form})
                setForm({movieTitle: "", filmType: [], ageLimit: "", time: "", description: "", cardImg: "", pageImg: "", trailer: ""})
                clearError()
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <>
            <TextField 
                className={classes.input }  
                label="Название фильма"
                name="movieTitle" 
                value = {form.movieTitle}
                onChange={changeHandlerInputField}
            />
            <FormControl className="col-xl-12" >
                <InputLabel>Жанр</InputLabel>
                <Select
                name="filmType"
                value={form.filmType}
                multiple
                onChange={handleChangeType}
                >
                    <MenuItem value='anime'>аниме</MenuItem>
                    <MenuItem value='biography'>биография</MenuItem>
                    <MenuItem value='actionMovie'>боевик</MenuItem>
                    <MenuItem value='western'>вестерн</MenuItem>
                    <MenuItem value='military'>военный</MenuItem>
                    <MenuItem value='detective'>детектив</MenuItem>
                    <MenuItem value='childlike'>детский</MenuItem>
                    <MenuItem value='documentary'>документальный</MenuItem>
                    <MenuItem value='drama'>драма</MenuItem>
                    <MenuItem value='historical'>исторический</MenuItem>
                    <MenuItem value='comedy'>комедия</MenuItem>
                    <MenuItem value='shortFilm'>короткометражный</MenuItem>
                    <MenuItem value='crime'>криминал</MenuItem>
                    <MenuItem value='melodrama'>мелодрама</MenuItem>
                    <MenuItem value='cartoon'>мультфильм</MenuItem>
                    <MenuItem value='musical'>мюзикл</MenuItem>
                    <MenuItem value='scientific'>научный</MenuItem>
                    <MenuItem value='adventures'>приключения</MenuItem>
                    <MenuItem value='family'>семейный</MenuItem>
                    <MenuItem value='thriller'>триллер</MenuItem>
                    <MenuItem value='horrors'>ужасы</MenuItem>
                    <MenuItem value='fantastic'>фантастика</MenuItem>
                    <MenuItem value='fantasy'>фэнтези</MenuItem>
                    <MenuItem value='erotica'>эротика</MenuItem>
                </Select>
            </FormControl> 
            <FormControl className="col-xl-3" >
                <InputLabel>Возрастное ограничение</InputLabel>
                <Select
                name="ageLimit"
                value={form.ageLimit}
                onChange={handleChangeLimit}
                >
                    <MenuItem value='limit0'>0+</MenuItem>
                    <MenuItem value='limit6'>6+</MenuItem>
                    <MenuItem value='limit12'>12+</MenuItem>
                    <MenuItem value='limit16'>16+</MenuItem>
                    <MenuItem value='limit18'>18+</MenuItem>
                </Select>
            </FormControl>
            <TextField 
                className={classes.input}  
                label="Продолжительность, мин"
                name="time" 
                value = {form.time}
                onChange={changeHandlerInputField}
            />
            <TextField
                className={classes.input} 
                label="Описание фильма"
                name="description" 
                multiline
                value={form.description}
                onChange={changeHandlerInputField}
            />
            <div>
                <input
                    accept="image/*"
                    className={classes.inputFile}
                    id={`cardImg${props.movie && "-Change"}`}
                    multiple
                    type="file"
                    onChange={onFileChange}
                />
                <label htmlFor={`cardImg${props.movie && "-Change"}`}>
                    <Button variant="contained" color="primary" component="span"
                    className={classes.btn} disabled={loading || loadingFile}>
                    Загрузить изображение для карточки фильма
                    </Button>
                </label>
                {props.movie && <a href={props.movie.cardImg} target="_blank"> Изображение на карочке </a>}
            </div>
            <div>
                <input
                    accept="image/*"
                    className={classes.inputFile}
                    id={`pageImg${props.movie && "-Change"}`}
                    multiple
                    type="file"
                    onChange={onFileChange}
                />
                <label htmlFor={`pageImg${props.movie && "-Change"}`}>
                    <Button variant="contained" color="primary" component="span"
                    className={classes.btn} disabled={loading || loadingFile}>
                    Загрузить изображение для страницы фильма
                    </Button>
                </label>
                {props.movie && <a href={props.movie.pageImg} target="_blank"> Изображение на странице </a>}
            </div>
            <TextField 
                className={classes.input}  
                label="Ссылка на трейлер к фильму"
                name="trailer" 
                value = {form.trailer}
                onChange={changeHandlerInputField}
            />
            <BtnMain text='СОХРАНИТЬ' cbHendler={saveFilmHandler} disabled = {loading}/>
            {alertMessage && <Alert variant="danger" className="mt-2">{alertMessage}</Alert>}
            {successMessage && <Alert variant="success" className="mt-2">{successMessage}</Alert>}
        </>
    )

}


const mapDispatchToProps = {
    addMovie,
    changeMovie
}

export default connect(null , mapDispatchToProps)(AddFilmForm)

// export default AddFilmForm