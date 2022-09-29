import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(4)]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
      country: new FormControl("", [Validators.required, Validators.max(200)]),
      age: new FormControl("", [Validators.required, Validators.min(18), Validators.max(100)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
    }, [this.confirmPassword])
  }

  confirmPassword(confirmpassword: AbstractControl) {
    let pw1 = confirmpassword.get('password').value;
    let pw2 = confirmpassword.get('confirmPassword').value;
    if (pw1 != pw2) {
      return {'confirmPassword': true}
    }
    return null;
  }

  ngOnInit(): void {
  }

  createUse() {
    console.log(this.registerForm);
  }
}
