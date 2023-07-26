import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {

  constructor(private http:HttpClient) { }

  public Categories(){
    return this.http.get(`${baseurl}/category/`)
  }
  public add_Category(category:any){
    return this.http.post(`${baseurl}/category/`,category)

  }
  public remove_category(cat: any){
    return this.http.delete(`${baseurl}/category/${cat}`)
  }
}

