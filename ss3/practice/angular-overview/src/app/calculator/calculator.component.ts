import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1: number;
  number2: number;
  total?: string;
  sigh?: string;

  calculator(): string {
    return this.total = eval(this.number1 + this.sigh + this.number2);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
