import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {Alert, ListGroup}from 'react-bootstrap'

import MoviesListAdmin from './MoviesListAdmin';
import Loading from './Loading'

import { useHttp } from "../hooks/http.hook";
import { setMovies , delMovie} from '../redux/actionsMovie';
import { FilmFormType } from './AddFilmForm';
import { AppStateType } from '../redux/rootReducer';

// type Props = {
//     setMovies: (payload: Array<{id:string, data:FilmFormType}>)=>any,
//     delMovie: (payload: string)=>any,
//     movieData: Array<{id:string, data:FilmFormType}>
// }

const ChangeFilmBase:React.FC<any> = (props) => {

    const {loading, request, error, clearError}  = useHttp();

    const [alertMessage, setAlertMessage] = useState<any>("")

    useEffect (()=>{
        if (props.movieData === null ) showMoviesHandler()
    }, [props.movieData])

    useEffect(()=>{
        if (typeof(error)=='string') {
            setAlertMessage(error) 
        }
    }, [error])

    const showMoviesHandler = async () => {
        setAlertMessage('')
        try {
            const data = await request('/api/movie/getAllMovies', 'GET')
            props.setMovies(JSON.parse(JSON.stringify(data)))
            clearError()
        } catch (e) {
            console.log(e)
        }
    }

    const deleteMovieItem = async (id:string) => {
        setAlertMessage('')
        try {
            await request('/api/movie/delMovie', 'POST', {id})
            props.delMovie(id)
            clearError()

        } catch (e) {
            console.log(e)
        }
    }
        
    return (
        < >
            {loading && <Loading />}
            {props.movieData !== null && props.movieData.length>0 && 
            <ListGroup>
                {props.movieData.map((movie:{id:string, data:FilmFormType})=>{return <MoviesListAdmin key={movie.id} title={movie.data.movieTitle} info = {movie.data} id={movie.id} cdDelete = {deleteMovieItem}/>})}
            </ListGroup>
            }
            {alertMessage && <Alert variant="danger" className="mt-2">{alertMessage}</Alert>}
        </>
    )
}

const mapStatetoProps  = (state:AppStateType) => {
    return {
      movieData: state.movie.moviesArr
    }
}

const mapDispatchToProps = {
    setMovies,
    delMovie
}

export default connect(mapStatetoProps , mapDispatchToProps)(ChangeFilmBase)

// export default ChangeFilmBase