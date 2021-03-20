  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarImage } from '../models/carimage';
import { listResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44340/api/"
  constructor(private httpClient:HttpClient) { }

  
  getCarImagesById(carId:number):Observable<listResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carImages/getimagesbycarid?carId="+carId
    return this.httpClient.get<listResponseModel<CarImage>>(newPath)
  }
}