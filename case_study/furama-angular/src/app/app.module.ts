import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { DeleteComponent } from './facility/delete/delete.component';
import {FormsModule} from "@angular/forms";
import { FacilityAddComponent } from './facility/facility-add/facility-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FacilityListComponent,
    DeleteComponent,
    FacilityAddComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
