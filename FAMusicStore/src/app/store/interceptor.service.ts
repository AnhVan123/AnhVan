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
    const artist = req.clone({setHeaders: { Authorization: `Authorization: Bearer  BQBoCsajK6jr7zc58fBWJADzwvXf8qahwrzrUziEBI2y_GFivmNI1jQ9zZMbKivTHoBMawOZ5x7UtjsstvCSY-zVkuVZ7_u9xL7_2GBsnov_0AysmqxA3DuxETXE3SDL_z6zmDk0g2LwmfgQral2p_eYLl2-AJwz09fEZvYeFwzdE5Jsvm0kwXuSroG_NCn-ag0-9EEdoqg9ZbmNzMHy_x5aEi706U9wuosmIA` }});
    return next.handle(artist);
  }
}
