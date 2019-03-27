import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemComponent } from './item/item.component';
import { TableComponent } from './table/table.component';
import { PipePhonePipe } from './pipe-phone.pipe';
import { OrderByDirective } from './order-by.directive';
import { OrderModule } from 'ngx-order-pipe';



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    TableComponent,
    PipePhonePipe,
    OrderByDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

