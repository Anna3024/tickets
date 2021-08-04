import {SET_MOVIES, ADD_MOVIE, DEL_MOVIE, CHANGE_MOVIE} from './types'
import {SetUserActionType} from './actions'

import {FilmFormType} from '../components/AddFilmForm'

type InitialStateType = {
    moviesArr: Array<{id:string, data:FilmFormType}> | null,
}

const initialState:InitialStateType = {
    moviesArr: null,
}

export const movieReduser = (state = initialState, action:SetUserActionType):InitialStateType => {

    switch (action.type) {

        case SET_MOVIES: {
            return {...state, moviesArr: action.payload}
        }

        case CHANGE_MOVIE: {
            if (state.moviesArr!==null) {
                return {...state, moviesArr: state.moviesArr.slice().map((v)=>{return (v.id==action.payload.id)?{id: action.payload.id, data: action.payload.data}:v})}
            }
            return {...state}
            
        }

        case DEL_MOVIE: {
            if (state.moviesArr!==null) {
                return {...state, moviesArr: state.moviesArr.slice().filter((v)=>{return v.id!==action.payload})}
            }
            return {...state}
        }

        case ADD_MOVIE: {
            if (state.moviesArr!==null) {
                let newMoviesArr = [...state.moviesArr, action.payload]
                console.log(newMoviesArr)
                return {...state, moviesArr: newMoviesArr}
            }
            return {...state}
            
        }

        default: return state
    }
}