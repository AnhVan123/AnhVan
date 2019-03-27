import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './Model/Emplyee';
import {EMPLOYEES} from './Model/DataEmployee';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee: Employee;
  title = 'AngularCore3';

}
