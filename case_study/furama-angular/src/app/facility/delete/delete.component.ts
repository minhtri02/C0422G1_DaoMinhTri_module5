import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFacility} from "../../../model/facility/ifacility";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input()facility:IFacility={};

  @Output() itemFacility=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteFacility() {
    this.itemFacility.emit(this.facility);
  }
}
