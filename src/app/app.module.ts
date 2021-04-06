import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { CardModule, } from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe  } from './pipes/color-filter.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';


import{ToastrModule} from "ngx-toastr";
import { RentalDtoComponent } from './components/rental-dto/rental-dto.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrandcolorcategoryComponent } from './components/brandcolorcategory/brandcolorcategory.component';
import { ProfileComponent } from './components/profile/profile.component';
import { JwtModule } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    NaviComponent,
    CarDetailComponent,
    CarFilterComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    RentalComponent,
    PaymentComponent,
    RentalDtoComponent,
    LoginComponent,
    RegisterComponent,
    CarAddComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    BrandListComponent,
    CarListComponent,
    CarUpdateComponent,
    ColorListComponent,
    FooterComponent,
    HomeComponent,
    BrandcolorcategoryComponent,
    ProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot(
      {
        positionClass:"toast-bottom-right"
      })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }