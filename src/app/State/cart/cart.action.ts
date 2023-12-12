import { createAction, props } from "@ngrx/store";

export const addItemToCartRequest = createAction(
    '[cart] Find Item Cart Request',
    props<{reqData:any}>()
)

export const addItemToCartSuccess = createAction(
    '[cart] Add Item Cart Success',
    props<{payload:any}>()
)

export const addItemToCartFailure = createAction(
    '[cart] Add Item Cart Failure',
    props<{error:any}>()
)

export const getCartRequest = createAction(
    '[cart] Get Cart Request',
)

export const getCartSuccess = createAction(
    '[cart] Get Cart Success',
    props<{payload:any}>()
)

export const getCartFailure = createAction(
    '[cart] Get Cart Failure',
    props<{error:any}>()
)

export const removeCartItemRequest = createAction(
    '[cart] Remove Cart Item Request',
    props<{reqData: any}>()
)

export const removeCartItemSuccess = createAction(
    '[cart] Remove Cart Item Succes',
    props<{cartItemId: any}>()
)

export const removeCartItemFailure = createAction(
    '[cart] Remove Cart Item Failure',
    props<{error: any}>()
)

export const updateCartItemRequest = createAction(
    '[cart] Update Cart Item Request',
    props<{reqData: any}>()
)

export const updateCartItemSuccess = createAction(
    '[cart] Update Cart Item Success',
    props<{payload: any}>()
)

export const updateCartItemFailure = createAction(
    '[cart] Update Cart Item Failure',
    props<{error: any}>()
)


