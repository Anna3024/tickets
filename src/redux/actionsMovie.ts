import {SET_MOVIES, ADD_MOVIE, DEL_MOVIE, CHANGE_MOVIE} from './types'
import {FilmFormType} from '../components/AddFilmForm'

export function setMovies(moviesArr:Array<{id:string, data:FilmFormType}>) { 
  return {
    type: SET_MOVIES,
    payload: moviesArr
  }
}

export function delMovie(id:string) { 
  return {
    type: DEL_MOVIE,
    payload: id
  }
}

export function addMovie(movie:{id:string, data: FilmFormType}) {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export function changeMovie(movie:{id:string, data: FilmFormType}) {
  return {
    type: CHANGE_MOVIE,
    payload: movie
  }
}