import { Injectable } from '@angular/core';
import {Customer} from "../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
customers:Customer[]=[
  {id:1,name:'tri',dateOfBirt:'25-10-1998',gender:true,idCard:'12345678',phoneNumber:'0333933391',email:'minhtricgv@gmail.com',address:'da nang',customerType:{id:1,name:'vip'}},
  {id:2,name:'quynh ',dateOfBirt:'25-10-1998',gender:true,idCard:'12345678',phoneNumber:'045674567',email:'kjhasdkh@gmail.com',address:'da nang',customerType:{id:2,name:'tb'}},
  {id:3,name:'trung ',dateOfBirt:'25-10-1998',gender:true,idCard:'12345678',phoneNumber:'094567523421',email:'klajsdky@gmail.com',address:'da nang',customerType:{id:3,name:'thuong'}},
  {id:4,name:'thai',dateOfBirt:'25-10-1998',gender:true,idCard:'12345678',phoneNumber:'08123213443',email:'kbskvgi@gmail.com',address:'da nang',customerType:{id:1,name:'vip'}},
  {id:5,name:'tai',dateOfBirt:'25-10-1998',gender:true,idCard:'12345678',phoneNumber:'081233223',email:'uiiweyrk@gmail.com',address:'da nang',customerType:{id:1,name:'vip'}},
]
  constructor() { }

  findAll(){
  return this.customers;
  }
}
