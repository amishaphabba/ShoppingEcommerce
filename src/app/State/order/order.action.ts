import { createAction, props } from "@ngrx/store";

export const createOrderRequest = createAction(
    '[order] Create Order Request',
    props<{reqData:any}>()
)

export const createOrderSuccess = createAction(
    '[order] Create Order Success',
    props<{order:any}>()
)

export const createOrderFailure = createAction(
    '[order] Create Order Failure',
    props<{error:any}>()
)

export const getOrderByIdRequest = createAction(
    '[order] Get Order By Id Request',
    props<{orderId: any}>()
)

export const getOrderByIdSuccess = createAction(
    '[order] Get Order By Id Success',
    props<{order: any}>()
)

export const getOrderByIdFailure = createAction(
    '[order] Get Order By Id Failure',
    props<{error: any}>()
)

export const getOrderHistoryRequest = createAction(
    '[order] Get Order History Request',
)

export const getOrderHistorySuccess = createAction(
    '[orders] Get Order History Success',
    props<{orders: any}>()
)

export const getOrderHistoryFailure = createAction(
    '[order] Get Order History Failure',
    props<{error: any}>()
)

export const getAllOrderRequest = createAction(
    '[order] Get All Order Request',
)

export const getAllOrderSuccess = createAction(
    '[order] Get All Order Success',
    props<{payload:any}>()
)

export const getAllOrderFailure = createAction(
    '[order] Get All Order Failure',
    props<{error:any}>()
)

export const confirmOrderRequest = createAction(
    '[order] Confirm Order Request',
)

export const confirmOrderSuccess = createAction(
    '[order] Confirm Order Success',
    props<{payload:any}>()
)

export const confirmOrderFailure = createAction(
    '[order] Confirm Order Failure',
    props<{error:any}>()
)

export const shipOrderRequest = createAction(
    '[order] Ship Order Request',
)

export const shipOrderSuccess = createAction(
    '[order] Ship Order Success',
    props<{payload:any}>()
)

export const shipOrderFailure = createAction(
    '[order] Ship Order Failure',
    props<{error:any}>()
)


export const deliverOrderRequest = createAction(
    '[order] Deliver Order Request',
)

export const deliverOrderSuccess = createAction(
    '[order] Deliver Order Success',
    props<{payload:any}>()
)

export const deliverOrderFailure = createAction(
    '[order] Deliver Order Failure',
    props<{error:any}>()
)


export const deleteOrderRequest = createAction(
    '[order] Delete Order Request',
)

export const deleteOrderSuccess = createAction(
    '[order] Delete Order Success',
    props<{payload:any}>()
)

export const deleteOrderFailure = createAction(
    '[order] Delete Order Failure',
    props<{error:any}>()
)
