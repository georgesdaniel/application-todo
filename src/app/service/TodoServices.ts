import {Injectable} from '@angular/core';
import Todo from '../models/todo';
import {TodoApi} from './todo.api';


@Injectable()
export class TodoService  {
  constructor( private todoApi: TodoApi) {
  }
    deleteServiceTodo(): Promise <Array<Todo>> {
      return this.todoApi.deletefecthTodo();

  }

  addTodoService(event: Todo): Promise<any> {
    return this.todoApi.addfetchTodo(event);

  }


  }
