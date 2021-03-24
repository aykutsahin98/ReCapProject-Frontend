import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44340/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetail';
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarbybrand?brandId=' + brandId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarbycolor?colorId=' + colorId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
}
