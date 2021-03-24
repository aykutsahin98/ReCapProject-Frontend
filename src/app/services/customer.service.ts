import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44340/api/customers/getallcustomerdetails';

  constructor(private httpClient: HttpClient) { }

  getCustomer():Observable<listResponseModel<Customer>> {
    return this.httpClient.get<listResponseModel<Customer>>(this.apiUrl)
  }
}
