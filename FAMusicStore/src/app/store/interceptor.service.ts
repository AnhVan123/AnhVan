import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:max-line-length
    const artist = req.clone({setHeaders: { Authorization: `Authorization: Bearer  BQCDP4JlvGToTcCHDlKQ38ehMODl5MeU_tXcXlBVDj7cQiMBqSVjedBF2uBqavLyopDgSTTIjmmt5Q3yomvJGkjXRLcL-sxQum1MdYwQAIOCmhmovOTWg-hxjVgqUe2Nw82ZbB-zSUvs9r0NhbT_jFxhh0DQJpG4NVDJhozSITeaHQWLsj_S8y91baPAfuokQLl29m-61mFC-smpiz_iosWpvvj80Q1eB3rTdw` }});
    return next.handle(artist);
  }
}
