import Cookies from 'js-cookie'
import { USER_LOGOUT, SET_USER} from "./types";

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
        // await auth.signInWithEmailAndPassword(email, password)
        // .then(({user}) => {
        //     if (user!==null) {
        //         return user.getIdToken().then((idToken)=>{
        //             console.log(idToken)
        //             return fetch('http://localhost:5000/register', {
        //                 mode: 'no-cors',
        //                 method:'POST',
        //                 //@ts-ignore
        //                 headers: {
        //                     Accept: "application/json",
        //                     "Content-Type": "application/json",
        //                     "CSRF-Token": Cookies.get("XSRF-TOKEN")
        //                 },
        //                 body: JSON.stringify({ idToken })
        //             })
        //         })
        //     }
            
        // })
        // .then(() => {
        //     return auth.signOut();
        // })
        const response = await auth.signInWithEmailAndPassword(email, password)
        console.log(auth.currentUser)
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(response.user))})
    }
}

export function userSignup(email:string, password:string) {
    return async (dispatch:any) => {
        const response = await auth.createUserWithEmailAndPassword(email, password)
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(response.user))})
    }
}

export function addUserInfo(userInfo:any) {
    return async function (dispatch:any) {
        const current = auth.currentUser
        await current?.updateProfile({
            displayName: userInfo.surname + " " + userInfo.name
        })
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(current))})
    }
}

export function apdateEmail(email:string) {
    return async function (dispatch:any) {
        const current = auth.currentUser
        await current?.updateEmail(email)
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(current))})
    }
}

export function apdatePassword(password:string) {
    return async function (dispatch:any) {
        const current = auth.currentUser
        await current?.updatePassword(password)
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(current))})
    }
}

export function userLogout() {
    return async (dispatch:any) => {
        await auth.signOut()
        dispatch({type: USER_LOGOUT})
    }
}

export function setUser(user:object|null) {
    return {
        type: SET_USER,
        payload: user
    }
}