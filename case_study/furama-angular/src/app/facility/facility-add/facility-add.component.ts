import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IFacility} from "../../../model/ifacility";

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {

  @Output() itemAddFacility = new EventEmitter();

  facility:IFacility = {};
  constructor() { }

  ngOnInit(): void {
  }

  addFacility(event:any){
    
  }
}
