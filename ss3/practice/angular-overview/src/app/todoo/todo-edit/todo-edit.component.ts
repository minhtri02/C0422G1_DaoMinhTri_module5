import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Todo} from "../../../model/todo";
import {TodoService} from "../../../service/todo.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todoEditForm: FormGroup;
  todo: Todo;

  constructor(private todoService: TodoService,private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      let id = paramMap.get('id')
      this.todoService.findByID(+id).subscribe(n=>{
        this.todo = n;
        this.todoEditForm = new FormGroup({
          id: new FormControl(this.todo.id),
          content: new FormControl(this.todo.content),
          complete: new FormControl(this.todo.complete),
        })
      })
    })

  }

  ngOnInit(): void {
  }

  submit() {
    this.todoService.edit(this.todoEditForm.value).subscribe(n=>{
      this.router.navigateByUrl("/todo/list")
    })
  }

}
