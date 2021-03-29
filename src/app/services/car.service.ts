import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { CarDto } from '../models/carDto';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  currentCar: Car;
  apiUrl = 'https://localhost:44340/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetail';
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  getCarsDetail(): Observable<listResponseModel<CarDto>> {
    let newPath = this.apiUrl + 'cars/getalldetail';
    return this.httpClient.get<listResponseModel<CarDto>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarbybrand?brandId=' + brandId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarbycolor?colorId=' + colorId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  addCar(car: Car) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "cars/add";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  updateCar(car: Car) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "cars/update";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
  deleteCar(car: Car) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "cars/delete";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
  getCarById(carId:number):Observable<SingleResponseModel<Car>>{
    let newUrl = this.apiUrl+"cars/getbyid?carId="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newUrl);
  }
  getCurrentCar() {
    return this.currentCar;
  }
}
