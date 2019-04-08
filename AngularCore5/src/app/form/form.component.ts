import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Button } from 'protractor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  [x: string]: any;
  formTest: FormGroup;
  submited = false;
  constructor() { }
  ngOnInit() {
this.formTest = new FormGroup({
  name : new FormControl('', [Validators.required]) ,
  email : new FormControl('', [Validators.required, Validators.email]) ,
  age : new FormControl('', [Validators.required, Validators.min(6)]),
  camp : new FormControl('', [Validators.required])
});
console.log(this.formTest);
  }
  onSubmit() {
  }
}
