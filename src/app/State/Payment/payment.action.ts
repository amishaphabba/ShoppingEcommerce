import { createAction, props } from "@ngrx/store";

export const createPaymentRequest = createAction(
    '[payment] Create Payment Request',
    props<{orderId:any}>()
)

export const createPaymentSuccess = createAction(
    '[payment] Create Payment Success',
    props<{payload:any}>()
)

export const createPaymentFailure = createAction(
    '[payment] Create Payment Failure',
    props<{error:any}>()
)

