import { createReducer, on } from "@ngrx/store"
import { findProductByCategoryFailure, findProductByCategorySuccess, findProductByIdFailure, findProductByIdSuccess } from "./product.action"

const initialState = {
    products: [],
    loading: false,
    error: null,
    prodcut: null
}

export const ProductReducer = createReducer(
    initialState,
    on(findProductByCategorySuccess, (state,{payload})=>({
        ...state,
        products: payload, 
        content: payload.content,
        loading: false
    })),
    on(findProductByIdSuccess, (state,{payload})=>({
        ...state,
        products: payload, 
        loading: false
    })),
    on(findProductByCategoryFailure, 
        findProductByIdFailure,
        (state,{error})=>({
        ...state,
        error: error,
        loading: false
    }))

)