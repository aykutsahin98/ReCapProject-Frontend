import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44340/api/rentals/getallrentaldetails";
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<listResponseModel<Rental>>
  {
    return this.httpClient.get<listResponseModel<Rental>>(this.apiUrl)
  }
}