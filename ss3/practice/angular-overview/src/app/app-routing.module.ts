import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryInfoComponent} from "./dictionary-info/dictionary-info.component";
import {ProductComponent} from "./product/product-list/product.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {TodoComponent} from "./todoo/todo/todo.component";
import {TodoEditComponent} from "./todoo/todo-edit/todo-edit.component";


const routes: Routes = [
  {path: ":eng",component: DictionaryInfoComponent},
  {path: "product/list", component: ProductComponent},
  {path: "product/create",component: ProductCreateComponent},
  {path: "product/edit/:id", component: ProductEditComponent},
  {path:"todo/list", component:TodoComponent},
  {path: "todo/edit/:id",component: TodoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
