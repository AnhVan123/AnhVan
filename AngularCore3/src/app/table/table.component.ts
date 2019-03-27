import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  text = '';
  listEmployee: any[] = [];
  constructor(private service: ServiceService) {
  }
  getAll()  {
    this.listEmployee = this.service.getAll();
  }
  Change(name) {
  this.text = name.value;
  }
  ngOnInit() {
    this.getAll();
  }

}
