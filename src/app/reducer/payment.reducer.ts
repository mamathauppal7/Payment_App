import { Action } from '@ngrx/store'
import { Payment } from '../model/payment.model'
import * as PaymentActions from '../action/Payment.action';


const initialState: Payment = {
     cardNumber:123456789014,
     username:'Kiran',
     exiparyDate:"2021-02-22",
     ccv:123,
     amount:1000
}

export function reducer(state: Payment[] = [initialState], action: PaymentActions.Actions) {

    // Section 3
    switch(action.type) {
        case PaymentActions.CONFIRM_PAYMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}