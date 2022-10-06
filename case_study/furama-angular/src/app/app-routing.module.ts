import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {BodyComponent} from "./body/body.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";


const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"customer",component:CustomerListComponent},
  {path:"customer/add",component:CustomerCreateComponent},
  {path:"facility",component:FacilityListComponent},
  {path:"customer/edit/:id",component:CustomerEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
