import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Dictionary} from "../../model/dictionary";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dictionary-info',
  templateUrl: './dictionary-info.component.html',
  styleUrls: ['./dictionary-info.component.css']
})
export class DictionaryInfoComponent implements OnInit {

  dictionary: Dictionary;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramap:ParamMap)=>{
      const eng = paramap.get('eng');
      this.dictionary = this.dictionaryService.findByEng(eng);
    })
  }

  ngOnInit(): void {
  }

}
