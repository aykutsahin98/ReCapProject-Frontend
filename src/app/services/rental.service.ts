import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44340/api";
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<listResponseModel<RentalDto>>
  {
    let newPath= this.apiUrl+"/rentals/getallrentaldetails";
    return this.httpClient.get<listResponseModel<RentalDto>>(newPath)
  }

  addRentals(rental:Rental):Observable<ResponseModel>
  {
    let newPath= this.apiUrl+"/rentals/add";
    return this.httpClient.post<ResponseModel>(newPath,{rental:rental})
  }
}