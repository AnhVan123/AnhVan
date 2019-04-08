import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../you-tube.service';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']
})
export class ListVideoComponent implements OnInit {

  url = 'https://www.googleapis.com/youtube/v3/search';
  listData: any;
  constructor(private youtubeService: YoutubeService) { }
  p = 1;
  ngOnInit() {
  }


  getVideo(event) {
    this.youtubeService.getAll(this.url, event.target.value).subscribe(data => {
      this.listData = data.items;
    });
    event.target.value = '';
  }
}
