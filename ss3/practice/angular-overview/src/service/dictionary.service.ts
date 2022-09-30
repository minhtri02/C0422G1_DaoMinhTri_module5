import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarys: Dictionary[];
  constructor() {
    this.dictionarys=[{eng:"country",vie:"quốc gia",describe:"quê hương, đồng ruộng, miền, nơi quê nhà, nước, ở đồng"},
      {eng:"water",vie:"nước uống",describe:"nước, nước biển, nước được đun sôi, nước lọc, nước sông, nước uống"}]
  }

  findAll(){
    return this.dictionarys;
  }

  findByEng(value: any) {
    for (let i = 0; i < this.dictionarys.length; i++) {
      if (this.dictionarys[i].eng===value){
        return this.dictionarys[i];
      }
    }
  }
}
