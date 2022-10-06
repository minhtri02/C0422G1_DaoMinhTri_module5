import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerService} from "../../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer:Customer;

  customerForm: FormGroup;

  customerTypes: CustomerType[];

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private router: Router) {
    activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      const id = paramap.get("id");
      this.customerService.findByIdCustomer(Number(id)).subscribe(n=>{
          this.customer = n;
        this.customerForm = new FormGroup({
          id: new FormControl(this.customer.id),
          name: new FormControl(this.customer.name),
          dateOfBirth: new FormControl(this.customer.dateOfBirth),
          gender: new FormControl(this.customer.gender),
          idCard: new FormControl(this.customer.idCard),
          phoneNumber: new FormControl(this.customer.phoneNumber),
          email: new FormControl(this.customer.email),
          address: new FormControl(this.customer.address),
          customerType: new FormControl(this.customer.customerType.id),
        });

      })
    })
    this.findAllCustomerType();
  }

  findAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(n => {
      this.customerTypes = n;
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

  editCustomer() {
    const customer =this.customerForm.value;
    this.customerService.findByIdType(this.customerForm.value.customerType).subscribe(n=>{
      customer.customerType = n;
    },error => {
      console.log(error);
    },() => {
      this.customerService.updateCustomer(customer.id,customer).subscribe(n=>{
        this.router.navigateByUrl("customer");
      })
    })
  }
}
