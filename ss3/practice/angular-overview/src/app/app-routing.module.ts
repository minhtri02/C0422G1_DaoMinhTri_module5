import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {DictionaryInfoComponent} from "./dictionary-info/dictionary-info.component";
import {ProductComponent} from "./product/product-list/product.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";


const routes: Routes = [
  {path: "",component: DictionaryComponent},
  {path: ":eng",component: DictionaryInfoComponent},
  {path: "product/list", component: ProductComponent},
  {path: "product/create",component: ProductCreateComponent},
  {path: "product/edit/:id", component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
