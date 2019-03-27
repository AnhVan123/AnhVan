import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MessagesComponent } from './messages/messages.component';
import { DetailComponent } from './detail/detail.component';
import { TableMessageDetailComponent } from './table-message-detail/table-message-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MessagesComponent,
    DetailComponent,
    TableMessageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
