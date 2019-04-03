import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ArtistService } from './store/artist.service';
// tslint:disable-next-line:import-spacing
import {InterceptorService} from  './store/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
