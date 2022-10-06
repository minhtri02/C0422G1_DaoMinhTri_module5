import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {Customer} from "../../../model/customer/customer";
import {isIdentifier} from "@angular/compiler";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerlist:Customer[];

  customerDelete:Customer;

  searchObj: any = {
    name: ''
  }

  idDelete:number;

  page:number =0;

  searchForm:FormGroup;

  constructor(private customerService: CustomerService,private router:Router) {
    this.findAll(this.searchObj);
  }

  findAll(object:any){
    this.customerService.findAll(object).subscribe(n=>{
      this.customerlist=n;
      console.log(n)
      console.log(this.customerlist[0].dateOfBirth+" main");
      // console.log(n.date+" temp");
    },error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.createSearchForm();
  }

  findByIdCustomer(id:number){
    this.customerService.findByIdCustomer(id).subscribe(n=>{
      this.customerDelete = n;
    },error => {
      console.log(error);
    });
  }

  showModal(id: number) {
    this.findByIdCustomer(id);
    this.idDelete = id;
  }

  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(n=>{
      this.findAll(this.searchObj);
      this.router.navigateByUrl("customer");
    })
  }

  createSearchForm(){
    this.searchForm = new FormGroup({
      name:new FormControl('')
    });
  }

  getSearch() {
    this.searchObj = this.searchForm.value;
    console.log(this.searchObj.name + "search");
    this.findAll(this.searchObj);
  }
}
