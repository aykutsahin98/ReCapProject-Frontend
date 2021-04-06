import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44340/api/';

  constructor(private httpClient: HttpClient) { }

  getCustomer():Observable<listResponseModel<Customer>> {
    let newPath = this.apiUrl + "customers/getallcustomerdetails"
    return this.httpClient.get<listResponseModel<Customer>>(newPath)
  }
  getCustomerId(userId:number):Observable<SingleResponseModel<Customer>>{
    let newPath = this.apiUrl + "customers/getbyuserid?userId=" + userId
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath)
  }
  customerUpdate(customer:Customer):Observable<ResponseModel>{
    let newPath = this.apiUrl + "customers/update"
    return this.httpClient.post<ResponseModel>(newPath,customer)
  }
}
