import { createReducer, on } from "@ngrx/store";
import { getUser, getUserFailure, getUserSuccess, logoutSuccess } from "./user.action";

const initialState={
    user: null,
    loading: false,
    error:null
}

export const userReducer = createReducer(
    initialState,
    on(getUser, (state)=> ({...state, loading:true, error:null})),
    on(getUserSuccess, (state, {user})=> ({...state, loading:false, error:null, user})),
    on(getUserFailure, (state, {error})=> ({...state, loading:true, error:error})),
    on(logoutSuccess,()=>initialState)
)