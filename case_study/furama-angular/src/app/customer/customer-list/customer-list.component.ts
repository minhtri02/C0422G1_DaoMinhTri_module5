import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerlist:Customer[];
  constructor(private customerService: CustomerService) {
    this.customerlist = this.customerService.findAll();
  }

  ngOnInit(): void {
  }

}
