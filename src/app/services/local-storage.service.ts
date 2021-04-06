import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
   localStorage: Storage;

  constructor() { 
     this.localStorage = window.localStorage;
  }
  get(key : string){
   return this.localStorage.getItem(key);
 }

  setToken(key: string, value: string) {
    localStorage.setItem(key,value);
 }

 getToken() {
    return localStorage.getItem("token");
 }

 removeToken(key: string) {
    localStorage.removeItem(key)
 }
 clean(){
   this.localStorage.clear();
 }
}


