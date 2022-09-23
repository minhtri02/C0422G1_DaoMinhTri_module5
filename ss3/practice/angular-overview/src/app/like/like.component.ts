import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  like :number=0;
  constructor() { }

  ngOnInit(): void {
  }

  likeThis() {
    console.log(this.like);
    this.like++;
  }

  likeThat() {
    if (this.like>0){
      this.like--;
    }
  }
}
