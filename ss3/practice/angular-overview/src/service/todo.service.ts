import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient)  { }


  findAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>("http://localhost:3000/todo")
  }

  add(todo: Todo){
    return this.http.post<Todo>("http://localhost:3000/todo", todo)
  }

  delete(id: number){
    return this.http.delete("http://localhost:3000/todo/"+id)
  }

  findByID(id: number){
    return this.http.get("http://localhost:3000/todo/"+id)
  }

  edit(todo: Todo){
    return this.http.patch("http://localhost:3000/todo/"+todo.id, todo)
  }
}
