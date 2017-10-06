import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todoitem/todoitem.component';
import { FormComponent } from './form/form.component';
import {TodoApi} from './service/todo.api';
import {TodoService} from './service/TodoServices';
import {GithubApiService} from './service/github.api.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoApi, TodoService, GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
