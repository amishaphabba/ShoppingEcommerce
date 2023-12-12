import { createReducer, on } from "@ngrx/store"
import { createOrderFailure, createOrderRequest, createOrderSuccess, getOrderByIdFailure, getOrderByIdRequest, getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistoryRequest, getOrderHistorySuccess } from "./order.action";

export interface OrderState{
    orders: any[],
    order: any | null,
    loading: boolean;
    error: any;
}

const initialState: OrderState = {
    orders: [],
    order: null,
    loading: false,
    error: null
}

export const OrderReducer = createReducer(
    initialState,
    on(createOrderRequest, getOrderByIdRequest, getOrderHistoryRequest,
         (state)=>({
        ...state,
        loading: true,
        error: null
    })),
    on(createOrderSuccess, (state, {order})=>({
        ...state,
        loading: false,
        order
    })),
    on(createOrderFailure, getOrderByIdFailure, getOrderHistoryFailure,
        (state, action)=>({
        ...state,
        error: action.error,
        loading: false
    })),
    on(getOrderByIdSuccess, (state, {order})=>({
        ...state,
        loading: false,
        order
    })),
    on(getOrderHistorySuccess, (state, {orders})=>({
        ...state,
        loading: false,
        orders
    })),
)