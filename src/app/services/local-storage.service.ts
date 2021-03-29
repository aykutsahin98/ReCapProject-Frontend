import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
   localStorage: Storage;

  constructor() { 
     this.localStorage = window.localStorage;
  }

  setToken(key: string, value: string) {
    localStorage.setItem(key,value);
 }

 getToken(key : string) {
    return localStorage.getItem(key);
 }

 removeToken(key: string) {
    localStorage.removeItem(key)
 }
 clean(){
   this.localStorage.clear();
 }
}


