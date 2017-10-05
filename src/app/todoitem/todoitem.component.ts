import {Component, OnInit, Input} from '@angular/core';
import Todo from '../Models/ToDo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor() {
  }

  ngOnInit() {
  }
  handleClick() {
    console.log('TODO', this.todo);
  }
}
