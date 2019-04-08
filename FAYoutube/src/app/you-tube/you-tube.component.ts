import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-you-tube',
  templateUrl: './you-tube.component.html',
  styleUrls: ['./you-tube.component.css']
})
export class YouTubeComponent implements OnInit {
  p = 1;
listData: any;
urlVideo = 'https://www.youtube.com/embed/';
urlDetail = 'https://www.googleapis.com/youtube/v3/videos';
video: any;
listRelated: any;
url = 'https://www.googleapis.com/youtube/v3/search';
videoValue = null;


constructor(private youtubeService: YoutubeService, private dom: DomSanitizer) { }
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
