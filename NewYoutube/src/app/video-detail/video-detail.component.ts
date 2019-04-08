import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../you-tube.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  p = 1;
  listData: any;
  urlVideo = 'https://www.youtube.com/embed/';
  urlDetail = 'https://www.googleapis.com/youtube/v3/videos';
  video: any;
  listRelated: any;
  url = 'https://www.googleapis.com/youtube/v3/search';
  videoValue = null;
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
      // const srcIframe = this.dom.bypassSecurityTrustResourceUrl(this.urlVideo + id);
      document.querySelector('iframe').setAttribute('src', this.urlVideo + id);
      this.youtubeService.getDetail(this.urlDetail, id).subscribe(data => {
        this.video = data.items;
        this.videoValue = this.video;
        console.log(this.video);
      });
    }
    related(id) {
     this.youtubeService.related(this.url, id).subscribe(data => {
       this.listRelated = data.items;
     });
  }
}
