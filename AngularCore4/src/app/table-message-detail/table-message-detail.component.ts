import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../model/mail';

@Component({
  selector: 'app-table-message-detail',
  templateUrl: './table-message-detail.component.html',
  styleUrls: ['./table-message-detail.component.css']
})
export class TableMessageDetailComponent implements OnInit {
  field = '';
  listEmail: Email[];
  selectedItem: string;
  constructor(
    private emmailService: EmailService,
    private active: ActivatedRoute
    ) { }
  ngOnInit() {
    this.getEmail();
  }

  getEmail() {
    return this.active.params.subscribe((param) => {
      this.listEmail = this.emmailService.getAll(param.folder);
     } );
  }

  selectItem(id: string) {
    this.selectedItem = id;
  }
}
