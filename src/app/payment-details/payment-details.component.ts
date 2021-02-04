import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import { Payment } from '../model/payment.model';
import { AppState } from "../state/payment.state";
import * as PaymentActions from '../action/Payment.action';
import { Store } from '@ngrx/store'
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../service/payment.service';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  paymentForm:FormGroup;
  submitted = false;


  constructor(private route:Router,private pb:FormBuilder,private store:Store<AppState>,
    private toastr: ToastrService,private paymentService:PaymentService) {

   }
 

  ngOnInit(): void {
    this.paymentForm=this.pb.group({
      cardNumber: [null,Validators.required],
      username: ['',Validators.required],
      exiparyDate:[null,Validators.required],
      ccv: [null,Validators.maxLength(3)],
      amount:[null,[Validators.required,Validators.min(1)]]
    })
  
  }

  get p() { return this.paymentForm.controls; }


  isValidInput(fieldName): boolean {
    return this.paymentForm.controls[fieldName].invalid &&
      (this.paymentForm.controls[fieldName].dirty || this.paymentForm.controls[fieldName].touched);
}

  cancel(){
   this.route.navigateByUrl('/Payment');
  }

  onSubmit( cardNumber,username,exiparyDate,ccv,amount){

    this.paymentService.confirmPayment(cardNumber,username,exiparyDate,ccv,amount)
    .subscribe((data:Payment)=>{
      if(!this.paymentForm.valid){
        this.toastr.error('Payment is failed :(');
        return;
      }
      
       this.store.dispatch(new PaymentActions.confirmPayment
        ({cardNumber:cardNumber,username:username,exiparyDate:exiparyDate
          ,ccv:ccv,amount:amount}));
      
         this.toastr.success('Payment is Successfull :)');
         setTimeout(()=>{ 
        this.route.navigateByUrl('/Payment');
        }, 1000);
    })
   
   
  }

  
}
