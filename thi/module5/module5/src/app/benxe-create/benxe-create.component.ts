import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DiemDi} from "../model/xyz/diemDi";
import {DiemDen} from "../model/xyz/diemDen";
import {BenxeService} from "../service/benxe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-benxe-create',
  templateUrl: './benxe-create.component.html',
  styleUrls: ['./benxe-create.component.css']
})
export class BenxeCreateComponent implements OnInit {

  benXeForm: FormGroup;

  diemDis: DiemDi[];

  diemDens: DiemDen[];

  constructor(private benxeService: BenxeService, private router: Router) {
    this.benXeForm = new FormGroup({
      id: new FormControl(),
      bienSoXe: new FormControl("", [Validators.required]),
      loaiXe: new FormControl("", [Validators.required]),
      tenNhaXe: new FormControl("", [Validators.required]),
      diemDi: new FormGroup({
        id: new FormControl(''),
      }),
      diemDen: new FormGroup({
        id: new FormControl(''),
      }),
      sdt: new FormControl("", [Validators.required, Validators.pattern("^(090|093|097)[0-9]{7}$")]),
      email: new FormControl("", [Validators.required, Validators.email]),
      gioDi: new FormControl("", [Validators.required]),
      gioDen: new FormControl("", [Validators.required]),
    });
    this.findAllDiemden();
    this.findAllDiemdi();
  }

  ngOnInit(): void {
  }

  findAllDiemdi() {
    this.benxeService.findAllDiemDi().subscribe(n => {
      this.diemDis = n;
    }, error => {
      console.log(error);
    })
  }

  findAllDiemden() {
    this.benxeService.findAllDiemDen().subscribe(n => {
      this.diemDens = n;
    }, error => {
      console.log(error);
    })
  }

  create() {
    const benxe = this.benXeForm.value;
    console.log(benxe);
    this.benxeService.createBenXe(benxe).subscribe(n => {
      this.router.navigateByUrl("");
      alert("Thành công!");
    }, error => {
      console.log(error);
    })
  }
}
