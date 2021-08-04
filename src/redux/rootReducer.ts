import { combineReducers } from "redux";

import { userReduser } from "./userReducer";
import { movieReduser} from "./movieReducer"

export const rootReducer = combineReducers({
    user: userReduser,
    movie: movieReduser
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>