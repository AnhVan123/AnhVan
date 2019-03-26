import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() Delete = new EventEmitter();
  @Output() Status = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  ReturnIdDeleteToList(id) {
    this.Delete.emit(id);
  }
  ReturnIdStatusToList(id) {
    this.Status.emit(id);
  }
}
