import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalDtoComponent } from './components/rental-dto/rental-dto.component';
import {PaymentComponent} from './components/payment/payment.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
 // {path:"",pathMatch:"full",component:CarComponent},
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
  {path:"customers",component:CustomerComponent},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "car-add", component:  CarAddComponent},
  { path: "brandadd", component:  BrandAddComponent},
  { path: "brandupdate", component:  BrandUpdateComponent},
  { path: "brandlist/brandupdate/:brandId", component:  BrandUpdateComponent},
  { path: "colorlist/colorupdate/:colorId", component:  ColorUpdateComponent},
  { path: "coloradd", component:  ColorAddComponent},
  { path: "colorlist", component:  ColorListComponent},
  { path: "colorupdate", component:  ColorUpdateComponent},
  { path: "brandlist", component:  BrandListComponent},
  { path: "car-list", component:  CarListComponent},
  { path: "carupdate", component:  CarUpdateComponent},
  { path: "cars/carupdate/:carId", component:  CarUpdateComponent},
  {path:"profile", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }