import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44340/api/";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<listResponseModel<Brand>>
  {
    let newPath = this.apiUrl + 'brands/getall';
    return this.httpClient.get<listResponseModel<Brand>>(newPath);
  }
  addBrand(brand: Brand) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "brands/add";
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }
  updateBrand(brand:Brand):Observable<ResponseModel>{
    let newUrl= this.apiUrl+"brands/update";
    return this.httpClient.put<ResponseModel>(newUrl,brand);
  }

  deleteBrand(brand:Brand):Observable<ResponseModel>{
    let newUrl= this.apiUrl+"brands/delete";
    return this.httpClient.post<ResponseModel>(newUrl,brand);
  }
  getBrandId(brandId:number):Observable<listResponseModel<Brand>>
  {
    let newPath = this.apiUrl + "brands/getbybrand?brandId="+brandId;
    return this.httpClient.get<listResponseModel<Brand>>(newPath);
  }
}