import { Component, OnInit } from '@angular/core';
import {Benxe} from "../model/xyz/benxe";
import {BenxeService} from "../service/benxe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-benxe',
  templateUrl: './benxe.component.html',
  styleUrls: ['./benxe.component.css']
})
export class BenxeComponent implements OnInit {

  benxes:Benxe[];

  benxeDelete:Benxe;
  constructor(private benxeService:BenxeService,private router:Router) {
    this.findAll();
  }

  findAll(){
    this.benxeService.findAll().subscribe(next=>{
      this.benxes = next;
      console.log(next);
      console.log(this.benxes);
    },error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

  deleteBenxe(id: number) {
    this.benxeService.deleteBenxe(id).subscribe(next=>{
      this.findAll();
    })
  }

  showModal(benxe: Benxe) {
    this.benxeDelete = benxe;
    this.router.navigateByUrl("");
  }
}
