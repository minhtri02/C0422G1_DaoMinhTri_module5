import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BenxeComponent} from "./benxe/benxe.component";
import {BenxeUpdateComponent} from "./benxe-update/benxe-update.component";
import {BenxeCreateComponent} from "./benxe-create/benxe-create.component";


const routes: Routes = [
  {path:"",component:BenxeComponent},
  {path:"edit/:id",component:BenxeUpdateComponent},
  {path:"benXe/create",component:BenxeCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
