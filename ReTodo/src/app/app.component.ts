import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReTodo';
  listTodo: Todo [] = [];
  AddTodo($event ) {
     const item: Todo = {
      id : new Date().getMilliseconds(),
      name : $event.target.value,
      status : false
     };
     this.listTodo.push(item);
  }
  CompleteTodo(id) {
    const data = this.listTodo.find(todo => todo.id === id);
    // tslint:disable-next-line:no-unused-expression
    data.status = ! data.status;
  }

  DeleteTodo(id) {
    this.listTodo = this.listTodo.filter(todo => todo.id !== id);
  }
}
