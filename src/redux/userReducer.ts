import {USER_LOGOUT, SET_USER} from './types'
import {SetUserActionType} from './actions'

// import { auth } from "../firebase"

type InitialStateType = {
    userObj: object | null
}

const initialState:InitialStateType = {
    userObj:  (function () {
        const userJSON = localStorage.getItem('moviegoer')
        if (userJSON !== null) {
            return JSON.parse(userJSON).user
        }
        return null
    }) ()
}

export const userReduser = (state = initialState, action:SetUserActionType):InitialStateType => {

    switch (action.type) {

        case USER_LOGOUT: {
            localStorage.removeItem("moviegoer")
            return {...state, userObj: null}
        }

        case SET_USER: {
            localStorage.setItem("moviegoer", JSON.stringify({"user": action.payload}))
            return {...state, userObj: action.payload}
        }

        default: return state
    }
}