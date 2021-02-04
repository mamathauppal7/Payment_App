import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path: '',redirectTo: 'Payment', pathMatch: 'full'},
  {path:'Payment',component:PaymentComponent},
  {path:'PaymentDetail',component:PaymentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
