import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Key } from 'selenium-webdriver';
import { GlobalConstants } from 'src/common/global-constants';
import { LoginModel } from '../models/login';
import { RegisterModel } from '../models/register';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/token';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:44340/api/auth/';

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let loginPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      loginPath,
      loginModel
    );
  }
  register(
    registerModel: RegisterModel
  ): Observable<SingleResponseModel<TokenModel>> {
    let registerPath = this.apiUrl + 'register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      registerPath,
      registerModel
    );
  }

  isAuthenticated(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }
}
