import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.productService.getAllProduct().subscribe(next=>{
      this.products = next;
    });
  }

  delete(id:number){
    this.productService.deleteById(id).subscribe(next=>{
      console.log(next);
      this.getAll();
    },error => {
      console.log(error);
    });
  }

}
