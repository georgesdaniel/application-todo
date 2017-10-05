import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Todo from '../models/ToDo';
import _ from 'lodash';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  todoLitevent: EventEmitter<Todo> = new EventEmitter<Todo>();

  newEvent(newTodo) {
    if (newTodo.value.trim().length) {
      this.todoLitevent.emit(new Todo (newTodo.value));
      console.log(newTodo.value);
    }
    else      {
      throw new Error('entrée vide ou incorrecte, veuillez recommencer');
    }
  }

  constructor() {
  }


  ngOnInit() {

  }

}
