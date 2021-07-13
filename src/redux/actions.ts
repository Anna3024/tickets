import { USER_LOGOUT, SET_USER } from "./types";

import { auth } from "../firebase"

export type UserLogoutActionType = {
    type: typeof USER_LOGOUT,
}

export type SetUserActionType = {
    type: typeof SET_USER,
    payload: object | null
}

export function userLogin(email:string, password:string) {
    return async (dispatch:any) => {
        const response = await auth.signInWithEmailAndPassword(email, password)
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(response.user))})
    }
}

export function userSignup(email:string, password:string) {
    return async (dispatch:any) => {
        const response = await auth.createUserWithEmailAndPassword(email, password)
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(response.user))})
    }
}

export function userLogout() {
    return async (dispatch:any) => {
        await auth.signOut()
        dispatch({type: USER_LOGOUT})
    }
}

export function setUser(user:object|null) {
    console.log("user in setUser",user)
    return {
        type: SET_USER,
        payload: user
    }
}