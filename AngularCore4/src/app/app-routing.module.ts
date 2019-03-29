import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMessagesComponent } from './list-messages/list-messages.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
