import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerService} from "../../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;

  customerTypes:CustomerType[];
  constructor(private customerService: CustomerService,private router:Router) {
    this.customerForm = new FormGroup({
      id: new FormControl("",Validators.required),
      name: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-z]+(\\s[A-Z][a-z]+)*$")]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]),
      phone: new FormControl('', [Validators.pattern("^(090|091|(84+)90|(84+)91)[0-9]{6}$")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      gender: new FormControl(),
      customerType:new FormControl(),
    });
    this.findAll()
  }

  ngOnInit(): void {
  }

  findAll(){
    this.customerService.getAllCustomerType().subscribe(n=>{
      this.customerTypes=n;
    },error => {
      console.log(error);
    })
  }

  submit() {
    const customer =this.customerForm.value;
    if (customer.gender=="true"){
      customer.gender = true;
    }else {customer.gender = false;}
    this.customerService.createCustomer(customer).subscribe(n=>{
      this.findAll()
      this.router.navigateByUrl("/customer");
    });

  }

  get email() {
    return this.customerForm.get('email');
  }

  get nameCustomer() {
    return this.customerForm.get('name');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get phone() {
    return this.customerForm.get('phone');
  }
}
