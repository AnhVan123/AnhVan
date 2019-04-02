import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formTest: FormGroup;
  constructor() { }
  ngOnInit() {
this.formTest = new FormGroup({
  name : new FormControl(''),
  email : new FormControl(''),
  age : new FormControl(''),

});
  }
  onSubmit() {
    console.log(this.formTest);
  }
}
