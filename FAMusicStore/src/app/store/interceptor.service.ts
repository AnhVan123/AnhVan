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
    const artist = req.clone({setHeaders: { Authorization: `Authorization: Bearer  BQDjNWcc3UWfQdr0aZc2K_GOUk7BC9N2KekpmdMfKj2sXd7HKQDeNZREiBYaBoIqTByxMoiA7ggClG-AV7tUo2KZi8AiVzz039iu1y4dJBJLPB7Y_HpZAm-MRXQLwQMXCMeH7bNEX4aarFJpyuvgRP_9qnLYYm7kgkY1VM3btxFhIyk6uj7oUtqI9GuoIUJCkb180Pc4pBvMNA915f7c0_ErEsdMc0TaGpLiaw` }});
    return next.handle(artist);
  }
}
