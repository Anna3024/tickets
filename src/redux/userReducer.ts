import {USER_LOGOUT, SET_USER, SET_USER_ROLE, ADD_USER_INFO} from './types'
import {SetUserActionType} from './actions'

type InitialStateType = {
    userObj: object | null,
    isAdmin: boolean,
    userInfo: object | null
}

const initialState:InitialStateType = {
    userObj: null,
    isAdmin: false,
    userInfo: null
}

export const userReduser = (state = initialState, action:SetUserActionType):InitialStateType => {

    switch (action.type) {

        case USER_LOGOUT: {
            return {...state, userObj: null, isAdmin: false, userInfo: null}
        }

        case SET_USER: {
            return {...state, userObj: action.payload}
        }

        case SET_USER_ROLE: {
            return {...state, isAdmin: action.payload.isAdmin, userObj: action.payload.user, userInfo: action.payload.userInfo}
        }

        case ADD_USER_INFO: {
            return {...state, userInfo: action.payload.addedInfo}
        }

        default: return state
    }
}