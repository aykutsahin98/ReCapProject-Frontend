import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl="https://localhost:44340/api";
  constructor(private httpClient:HttpClient) { }

  creditPayment(rental:Rental,amount:number):Observable<ResponseModel>
  {
    let newPath=this.apiUrl+"/rentals/paymentadd";
    rental.returnDate= undefined;
    return this.httpClient.post<ResponseModel>(newPath,{payment:{amount:amount},rental:rental})
  }
}