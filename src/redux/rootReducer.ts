import { combineReducers } from "redux";
import { userReduser } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReduser
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>