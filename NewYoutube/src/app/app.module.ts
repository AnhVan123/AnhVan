import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { ListRelateComponent } from './list-relate/list-relate.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListVideoComponent,
    VideoDetailComponent,
    ListRelateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
