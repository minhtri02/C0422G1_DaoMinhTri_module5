import { Injectable } from '@angular/core';
import {Customer} from "../model/customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) { }

  findAll(object:any):Observable<any>{
  return this.httpClient.get(`http://localhost:3000/customer?name_like=${object.name}`);
  }

  getAllCustomerType(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/customerType");
  }

  createCustomer(customer: Customer):Observable<any>{
    return this.httpClient.post("http://localhost:3000/customer",customer);
  }

  deleteCustomer(id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/customer/"+id);
  }

  findByIdCustomer(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:3000/customer/"+id);
  }

  findByIdType(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:3000/customerType/"+id);
  }

  updateCustomer(id:number,customer:Customer):Observable<any>{
    return this.httpClient.put("http://localhost:3000/customer/"+id,customer);
  }
}
