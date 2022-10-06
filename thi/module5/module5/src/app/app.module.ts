import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BenxeComponent } from './benxe/benxe.component';
import { BenxeUpdateComponent } from './benxe-update/benxe-update.component';
import { BenxeCreateComponent } from './benxe-create/benxe-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BenxeComponent,
    BenxeUpdateComponent,
    BenxeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
