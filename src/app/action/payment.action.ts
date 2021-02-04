import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Payment } from '../model/payment.model'


export const CONFIRM_PAYMENT  = '[PAYMENT] Add'

export class confirmPayment implements Action{
    readonly type=CONFIRM_PAYMENT

    constructor(public payload:Payment){}
}

export type Actions = confirmPayment;