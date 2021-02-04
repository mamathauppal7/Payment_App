import { Payment } from "../model/payment.model";


export interface AppState {
  readonly payment: Payment[];
}