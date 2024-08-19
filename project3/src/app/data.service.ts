import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  producturl="http://localhost:3000/products1";
  constructor(private http:HttpClient){}
  getproducts(){
    return this.http.get<any[]>(this.producturl);
  }
}
