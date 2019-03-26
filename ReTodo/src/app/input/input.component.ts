import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Output() NameTodo = new EventEmitter();
  ngOnInit() {
  }
  Insert($event) {
    this.NameTodo.emit($event);
    $event.target.value = ' ';
  }
}
