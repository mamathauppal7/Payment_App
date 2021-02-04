import { Injectable } from '@angular/core';
import { Payment } from '../model/payment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { 
    
  }
   
  POST_API=`https://httpbin.org/post`;
  confirmPayment( cardNumber,username,exiparyDate,ccv,amount):Observable<Payment>{
       return this.http.post<Payment>(this.POST_API,{cardNumber,username,exiparyDate,ccv,amount} );
  }
}
