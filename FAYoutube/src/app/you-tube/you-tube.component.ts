import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-you-tube',
  templateUrl: './you-tube.component.html',
  styleUrls: ['./you-tube.component.css']
})
export class YouTubeComponent implements OnInit {

listData: any;
video: any;
urlVideo = 'https://www.youtube.com/embed/';
url = 'https://www.googleapis.com/youtube/v3/search';
urlDetail = 'https://www.googleapis.com/youtube/v3/videos';
constructor(private youtubeService: YoutubeService) { }
ngOnInit() {
  }

getVideo(event) {
    this.youtubeService.getAll(this.url, event.target.value).subscribe(data => {
      this.listData = data.items;
    });
    event.target.value = '';
  }

getDetail(id) {
    document.querySelector('iframe').setAttribute('src', this.urlVideo + id);
    this.youtubeService.getDetail(this.urlDetail, id).subscribe(data => {
      this.video = data.items;
      console.log(data);
    });
  }

}
