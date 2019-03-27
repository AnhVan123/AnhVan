import { Injectable } from '@angular/core';
import { Employee } from './Model/Emplyee';
import {EMPLOYEES} from './Model/DataEmployee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  listEmployee = EMPLOYEES;
  constructor() { }
  getAll() {
    return this.listEmployee;
  }
}
