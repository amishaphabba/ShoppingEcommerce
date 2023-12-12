import { createReducer, on } from "@ngrx/store"
import * as CartActions from './cart.action';
import { addItemToCartFailure, addItemToCartRequest, addItemToCartSuccess, getCartFailure, getCartRequest, getCartSuccess, removeCartItemFailure, removeCartItemRequest, removeCartItemSuccess, updateCartItemFailure, updateCartItemRequest, updateCartItemSuccess } from "./cart.action"

export interface CartState{
    cartItems: any[];
    loading: boolean;
    error: any;
    cart: any
}

const initialState: CartState = {
    cartItems: [],
    loading: false,
    error: null,
    cart: null
}

export const CartReducer = createReducer(
    initialState,
    on(CartActions.addItemToCartRequest, 
        CartActions.removeCartItemRequest, CartActions.updateCartItemRequest,
        (state)=>({
        ...state,
        loading: true,
        error: null
    })),
    on(CartActions.addItemToCartSuccess, (state, action)=>({
        ...state,
        loading: false,
        cartItems: [...state.cartItems, action.payload]
    })),
    on(CartActions.addItemToCartFailure, 
        (state, action)=>({
        ...state,
        error: action.error,
        loading: false
    })),

    on(CartActions.getCartRequest, (state)=>({
        ...state,
        loading: true,
        error: null
    })),
    on(CartActions.getCartSuccess, (state, action)=>({
        ...state,
        loading: false,
        cartItems: action.payload.cartItems,
        cart: action.payload
    })),
    on(CartActions.getCartFailure, 
        CartActions.removeCartItemFailure, CartActions.updateCartItemFailure,
        (state, action)=>({
        ...state,
        error: action.error,
        loading: false
    })),

    on(CartActions.removeCartItemSuccess, (state, action)=>({
        ...state,
        loading: false,
        cartItems: state.cartItems.filter((item) => item.id!==action.cartItemId)
    })),

    on(CartActions.updateCartItemSuccess, (state, action)=>({
        ...state,
        loading: false,
        cartItems: state.cartItems.map((item)=>
        item.id === action.payload.id ? action.payload: item),
    })),
                    
)