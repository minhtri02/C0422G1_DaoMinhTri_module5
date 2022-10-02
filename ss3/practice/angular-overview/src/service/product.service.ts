import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:3000/category");
  }

  findByIdCategory(id:number):Observable<Category>{
    return this.http.get("http://localhost:3000/category/"+id);
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/product");
  }

  saveProduct(product:Product): Observable<any> {
    return this.http.post("http://localhost:3000/product", product);
  }

  findById(id: number):Observable<Product> {
    return this.http.get<Product>("http://localhost:3000/product/" + id);
  }

  update(id:number,product: Product):Observable<any>{
   return this.http.put("http://localhost:3000/product/"+id, product);
  }

  deleteById(id: number): Observable<Product> {
    return this.http.delete<Product>("http://localhost:3000/product/" + id);
  }
}
