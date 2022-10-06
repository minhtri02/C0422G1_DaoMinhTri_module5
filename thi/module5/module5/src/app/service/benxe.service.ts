import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Benxe} from "../model/xyz/benxe";

@Injectable({
  providedIn: 'root'
})
export class BenxeService {

  constructor(private httpClient:HttpClient) { }

  findAll():Observable<Benxe[]>{
    return this.httpClient.get<Benxe[]>("http://localhost:8080/benXe/list");
  }

  deleteBenxe(id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/benXe/delete/"+id);
  }

  findByIdBenxe(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/benXe/"+id);
  }

  findAllDiemDi():Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:8080/benXe/diaChi");
  }

  findAllDiemDen():Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:8080/benXe/diaChi");
  }

  updateBenxe(benxe:Benxe):Observable<Benxe>{
    return this.httpClient.patch<Benxe>("http://localhost:8080/benXe/edit",benxe);
  }

  createBenXe(benxe:Benxe):Observable<any>{
    return this.httpClient.post("http://localhost:8080/benXe/create",benxe);
  }
}
