import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categorys:Category[];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  constructor(private productService: ProductService,private router: Router) {
    this.productService.getAllCategory().subscribe(next=>{
      this.categorys=next;
    },error => {
      console.log(error);
    })
  }

  ngOnInit(): void {

  }
  submit() {
    const product = this.productForm.value;
    this.productService.findByIdCategory(this.productForm.value.category).subscribe(n => {
      product.category = n;
      console.log(product);
    }, e => {
    }, () =>  {
      this.productService.saveProduct(product).subscribe();
      this.router.navigateByUrl("/product/list");
    });
  }
}
