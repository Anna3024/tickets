import {USER_LOGIN, USER_SIGNUP, USER_LOGOUT} from './types'
import {UserLoginActionType} from './actions'

import { auth } from "../firebase"

type InitialStateType = {
    isAuthorized: boolean,
    user: object 
}

const initialState:InitialStateType = {
    isAuthorized: true,
    user: (function () {
        return auth.onAuthStateChanged(user => {
            console.log("user",user)
            return JSON.parse(JSON.stringify(user))
        })
    })()
}

export const userReduser = (state = initialState, action:UserLoginActionType):InitialStateType => {
    switch (action.type) {
        case USER_LOGIN: {
            return {...state, isAuthorized: true}
        }
        case USER_LOGOUT: {
            return {...state, isAuthorized: false}
        }
        default: return state
    }
}