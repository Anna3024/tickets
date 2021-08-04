import { USER_LOGOUT, SET_USER, SET_USER_ROLE, ADD_USER_INFO} from "./types";

import { auth, database } from "../firebase"

export type UserLogoutActionType = {
    type: typeof USER_LOGOUT,
}

export type SetUserActionType = {
    type: typeof SET_USER,
    payload: any
}

export function userLogin(email:string, password:string) { //вход в личный кабинет
    return async (dispatch:any) => {
        const response = await auth.signInWithEmailAndPassword(email, password)
        await database.users.doc(response.user?.uid).get()
        .then((doc) => {
            if (doc.exists) {
                dispatch({type: SET_USER_ROLE, payload: {
                    user:  JSON.parse(JSON.stringify(response.user)), 
                    isAdmin: doc.data()?.role==='admin',
                    userInfo: doc.data()
                }})
            } else {
                dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(response.user))})
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
}

export function userSignup(email:string, password:string) {
    return async (dispatch:any) => {
        const response = await auth.createUserWithEmailAndPassword(email, password)
        database.users.doc(response.user?.uid).set({
            id: response.user?.uid,
            name: '',
            phone: '',
            birthday:'',
            email: email,
            gender: 'none',
            role: 'user',
        })
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(response.user))})
    }
}

export function addUserInfo(userInfo:any) { //добавить информацию о пользователе
    return async function (dispatch:any) {
        const current = auth.currentUser
        let addedInfo = {
            name: userInfo.surname + "/" + userInfo.name,
            phone: userInfo.phone,
            birthday: userInfo.birthday,
            gender: userInfo.gender,
        }
        database.users.doc(current?.uid).update(addedInfo)
        dispatch({type: ADD_USER_INFO, payload: addedInfo})
    }
}

export function apdateEmail(email:string) { //сменить Email
    return async function (dispatch:any) {
        const current = auth.currentUser
        await current?.updateEmail(email)
        database.users.doc(current?.uid).update({email})
        await database.users.doc(current?.uid).update({email})
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(current))})
    }
}

export function apdatePassword(password:string) { //сменить пароль
    return async function (dispatch:any) {
        const current = auth.currentUser
        await current?.updatePassword(password)
        dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(current))})
    }
}

export function userLogout() { //выйти из профиля
    return async (dispatch:any) => {
        await auth.signOut()
        dispatch({type: USER_LOGOUT})
    }
}

export function setUser(user:any) { //при первом открытии или обновлении страницы проверить зарегистрированного пользователя
    return async (dispatch:any) => {
        await database.users.doc(user?.uid).get()
        .then((doc) => {
            if (doc.exists) {
                dispatch({type: SET_USER_ROLE, payload: {
                    user, 
                    isAdmin: doc.data()?.role==='admin',
                    userInfo: doc.data()
                }})
            } else {
                dispatch({type: SET_USER, payload: JSON.parse(JSON.stringify(user))})
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
}
