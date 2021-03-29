import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44340/api/";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<listResponseModel<Color>>
  {
    let newPath = this.apiUrl + 'colors/getall';
    return this.httpClient.get<listResponseModel<Color>>(newPath); 
  }
  addColor(color: Color) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "colors/add";
    return this.httpClient.post<ResponseModel>(newPath, color);
  }
  updateColor(color:Color):Observable<ResponseModel>{
    let newUrl= this.apiUrl+"colors/update";
    return this.httpClient.put<ResponseModel>(newUrl,color);
  }

  deleteColor(color:Color):Observable<ResponseModel>{
    let newUrl= this.apiUrl+"colors/delete";
    return this.httpClient.post<ResponseModel>(newUrl,color);
  }
  getColorId(colorId:number):Observable<listResponseModel<Color>>
  {
    let newPath = this.apiUrl + "colors/getbycolor?colorId="+colorId;
    return this.httpClient.get<listResponseModel<Color>>(newPath);
  }
}

