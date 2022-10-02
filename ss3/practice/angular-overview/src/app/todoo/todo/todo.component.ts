import { Component, OnInit } from '@angular/core';
import {Todo} from "../../../model/todo";
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TodoService} from "../../../service/todo.service";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  content = new FormControl();

  constructor(private todoService: TodoService) {
    todoService.findAll().subscribe(next => {
      this.todos = next;
    })
  }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.add(todo).subscribe(next=>{
        this.content.reset();
        this.todoService.findAll().subscribe(next => {
          this.todos = next;
        })
      })
    }
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(n=>{
      this.todoService.findAll().subscribe(next => {
        this.todos = next;
      })
    })
  }
}
