import { Component } from '@angular/core';
import Todo from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos: Array <Todo> = [
    new Todo('write a Mail', false),
    new Todo('verify a Mail', false),
    new Todo('send a Mail', false),
    new Todo('delete the spams', false),
  ];


}
