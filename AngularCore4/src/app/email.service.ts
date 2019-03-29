import { Injectable } from '@angular/core';
import { Emails } from './model/mailData';
import { Email } from './model/mail';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private listEmail: Email[] = Emails;
  constructor() {
  }

  getAll( field ): Email[] {
    return this.listEmail.filter(x => x.folder === field);
  }

  getMessageById(id: string): Email {
    return this.listEmail.find(message => message._id === id);
  }
}
