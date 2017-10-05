import { Component, OnInit, Input, Output} from '@angular/core';
import Todo from '../models/todo';
import { TodoService} from '../service/TodoServices';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {


  todoList: Array<Todo> = [];
  todo : Todo;

  constructor(private todoService:TodoService) {
  }

  deleteTodos() {
    this.todoService.deleteServiceTodo().then((listtodo2)=>{
      this.todoList = listtodo2;
    });
  }



  ngOnInit() {

  }

}
