import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { Email } from '../model/mail';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  email: Email;
  constructor(
    private router: ActivatedRoute,
    private messageService: EmailService
  ) { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    return this.router.params.subscribe(param => {
      this.email = this.messageService.getMessageById(param.id);
    });
  }
}
