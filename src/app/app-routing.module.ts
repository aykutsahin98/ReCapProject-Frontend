import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalDtoComponent } from './components/rental-dto/rental-dto.component';
import {PaymentComponent} from './components/payment/payment.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/cardetail/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandId/cardetail/:carId", component:CarDetailComponent},
  {path:"cardetail/:carId", component:CarDetailComponent},
  {path:"cars/color/:colorId/cardetail/:carId", component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"rental/:carId",component:RentalComponent},
  {path:"rentalDtos",component:RentalDtoComponent},
  {path:"payment/:rental",component:PaymentComponent},
  {path:"customers",component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }