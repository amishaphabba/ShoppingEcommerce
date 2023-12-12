import { createAction, props } from "@ngrx/store";

export const getUser = createAction('[User] Get User')

export const getUserSuccess = createAction('[User] Get User Success', props<{user:any}>())

export const getUserFailure = createAction('[User] Get User Failure ', props<{error:any}>())

export const logoutSuccess = createAction('[User] Logout Success ')