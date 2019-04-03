import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  url = '';
  constructor(private httpClient: HttpClient) {
  }
  getAll(url, name): Observable<any> {
    const typeA = 'artist';
    return this.httpClient.get(url, {params: {
      // truyen vao parm bat buoc, ten tham so hien thii tren url
     q : name, type: typeA

    }});
  }
 getSong(url , id): Observable<any> {
   url = url + id + '/top-tracks';
   const countrys = 'VN';
   return this.httpClient.get(url, {params: {
    country : countrys
  }} );
 }
}
