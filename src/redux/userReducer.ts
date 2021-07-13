import {USER_LOGOUT, SET_USER} from './types'
import {SetUserActionType} from './actions'

// import { auth } from "../firebase"

type InitialStateType = {
    userObj: object | null
}

const initialState:InitialStateType = {
    userObj: null
}

export const userReduser = (state = initialState, action:SetUserActionType):InitialStateType => {

    switch (action.type) {

        case USER_LOGOUT: {
            return {...state, userObj: null}
        }

        case SET_USER: {
            console.log('user in userReducer', action.payload)
            return {...state, userObj: action.payload}
        }

        default: return state
    }
}