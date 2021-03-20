import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44340/api/colors/getall";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<listResponseModel<Color>>
  {
    return this.httpClient.get<listResponseModel<Color>>(this.apiUrl)
  }
}
