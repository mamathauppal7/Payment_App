import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment.model';
import { AppState } from '../state/payment.state';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  payments:Observable<Payment[]>;
  constructor(private route:Router,private store:Store<AppState>) { 
    this.payments=this.store.select('payment');
  }

  ngOnInit(): void {
   
  }
  onPayment(){
   this.route.navigateByUrl('/PaymentDetail');
  }

}
