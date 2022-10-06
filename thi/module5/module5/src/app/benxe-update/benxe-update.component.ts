import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Benxe} from "../model/xyz/benxe";
import {DiemDi} from "../model/xyz/diemDi";
import {DiemDen} from "../model/xyz/diemDen";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BenxeService} from "../service/benxe.service";

@Component({
  selector: 'app-benxe-update',
  templateUrl: './benxe-update.component.html',
  styleUrls: ['./benxe-update.component.css']
})
export class BenxeUpdateComponent implements OnInit {

  benxeForm: FormGroup;

  benxe: Benxe;

  diemDis: DiemDi[];

  diemDens: DiemDen[];

  constructor(private activatedRoute: ActivatedRoute, private benxeService: BenxeService,private router:Router) {
    activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      const id = paramap.get("id");
      this.benxeService.findByIdBenxe(Number(id)).subscribe(next => {
        this.benxe = next;
        this.benxeForm = new FormGroup({
          id: new FormControl(this.benxe.id),
          bienSoXe: new FormControl(this.benxe.bienSoXe, [Validators.required]),
          loaiXe: new FormControl(this.benxe.loaiXe, [Validators.required]),
          tenNhaXe: new FormControl(this.benxe.tenNhaXe, [Validators.required]),
          diemDi: new FormGroup({
            id: new FormControl(this.benxe.diemDi.id),
          }),
          diemDen: new FormGroup({
            id: new FormControl(this.benxe.diemDen.id),
          }),
          sdt: new FormControl(this.benxe.sdt, [Validators.required,Validators.pattern("^(090|093|097)[0-9]{7}$")]),
          email: new FormControl(this.benxe.email, [Validators.required, Validators.email]),
          gioDi: new FormControl(this.benxe.gioDi, [Validators.required]),
          gioDen: new FormControl(this.benxe.gioDen, [Validators.required]),
        })
      })
    })

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

  editBenxe() {
    const benxe = this.benxeForm.value;
    console.log(benxe)
    this.benxeService.updateBenxe(benxe).subscribe(n=>{
      console.log(benxe);
      this.router.navigateByUrl("");
      alert("thành công!");
    }, error => {
      console.log(error)
    });
  }
}
