import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() listTodo: Todo [] = [];
  @Output() Remove = new EventEmitter();
  @Output() Complete = new EventEmitter();
  ngOnInit() {
  }
  ReturnIdCompleteToApp(id) {
    this.Complete.emit(id);
  }
  ReturnIdRemoveToApp(id) {
    this.Remove.emit(id);
  }
}
