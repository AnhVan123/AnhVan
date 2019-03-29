import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MessagesComponent } from './messages/messages.component';
import { TableMessageDetailComponent } from './table-message-detail/table-message-detail.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { Routes, RouterModule } from '@angular/router';
import { EmailService } from './email.service';

const routers: Routes = [
  { path: '', component: MenuComponent, children: [
    {path: 'listMessage', component: ListMessagesComponent, children: [
      {path: ':folder', component: TableMessageDetailComponent },
      { path: ':id', component: MessagesComponent, outlet: 'message' }
    ]}
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MessagesComponent,
    TableMessageDetailComponent,
    ListMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers)
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
