import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44340/api/brands/getall";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<listResponseModel<Brand>>
  {
    return this.httpClient.get<listResponseModel<Brand>>(this.apiUrl)
  }
}