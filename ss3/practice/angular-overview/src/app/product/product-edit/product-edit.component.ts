import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product:Product={};

  productForm: FormGroup ;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,private router: Router) {
    activatedRoute.paramMap.subscribe((paramap:ParamMap)=>{
      const id =paramap.get('id');
      this.product=this.productService.findById(Number(id));
    })
    this.productForm =  new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateById(product);
    this.productForm.reset();
    this.router.navigateByUrl("product/list");
  }
}
