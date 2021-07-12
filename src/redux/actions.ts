import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT } from "./types";

export type UserLoginActionType = {
    type: typeof USER_LOGIN,
    payload: object
}

export type UserSignupActionType = {
    type: typeof USER_SIGNUP,
    payload: object
}

export type UserLogoutActionType = {
    type: typeof USER_LOGOUT,
}

export function userLogin(user:object):UserLoginActionType {
    return {
        type: USER_LOGIN,
        payload: user
    }
}

export function userSignup(user:object):UserSignupActionType {
    return {
        type: USER_SIGNUP,
        payload: user
    }
}

export function userLogout():UserLogoutActionType {
    return {
        type: USER_LOGOUT
    }
}