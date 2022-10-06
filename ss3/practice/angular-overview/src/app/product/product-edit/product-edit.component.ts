import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {};

  categories: Category[] = [];

  productForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      const id = paramap.get('id');
      console.log(id);
      this.productService.findById(Number(id)).subscribe(next => {
        console.log(next);

        this.product = next;
        console.log(this.product);

        this.productForm = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name),
          price: new FormControl(this.product.price),
          description: new FormControl(this.product.description),
          category: new FormControl(this.product.category.id),
        });
      }, error => {
        console.log(error);
      });
    });
    productService.getAllCategory().subscribe(n => {
      this.categories = n;
    });
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
      this.productService.update(product.id,product).subscribe();
      this.router.navigateByUrl("/product/list");
    });
  }
}
