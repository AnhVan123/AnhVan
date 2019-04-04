import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(private httpClient: HttpClient) { }

  getAll(url, name): Observable<any> {
    return  this.httpClient.get(url, {params: {
        key: 'AIzaSyAG8xd0CFtVv7-15lwV6gXcHEH5Kdfh-9Q',
        part: 'snippet',
        q: name,
        maxResults: '25'
    }});
  }

  getDetail(url, idvideo): Observable<any> {
    return this.httpClient.get(url, {params: {
      key: 'AIzaSyAG8xd0CFtVv7-15lwV6gXcHEH5Kdfh-9Q',
      part: 'snippet,contentDetails,statistics',
      id : idvideo
    }} );
  }
}
