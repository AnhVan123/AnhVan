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
        key: 'AIzaSyDAj31YVVKMkvvGm9VyEwog6W4tSZDUpxI',
        part: 'snippet',
        q: name,
        maxResults: '25'
    }});
  }

  getDetail(url, idvideo): Observable<any> {
    return this.httpClient.get(url, {params: {
      key: 'AIzaSyDAj31YVVKMkvvGm9VyEwog6W4tSZDUpxI',
      part: 'snippet,contentDetails,statistics',
      id : idvideo
    }} );
  }

  related(url, idvideo): Observable<any> {
    return this.httpClient.get(url, {params: {
      key: 'AIzaSyDAj31YVVKMkvvGm9VyEwog6W4tSZDUpxI',
      part: 'snippet',
      type: 'video',
      relatedToVideoId: idvideo
    }} );
  }
}
