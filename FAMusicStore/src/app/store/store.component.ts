import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  listData: any;
  listsong: any;
  url = 'https://api.spotify.com/v1/search';
  url2 = 'https://api.spotify.com/v1/artists/';
  constructor(private artistService: ArtistService) {}

  ngOnInit() {}
  getArtist(event) {
    this.artistService.getAll(this.url, event.target.value).subscribe(data => {
      this.listData = data.artists.items;
      console.log(this.listData);
    });
    event.target.value = '';
  }

  onClick(id) {
    this.artistService.getSong(this.url2, id).subscribe(data => {
      this.listsong = data.tracks;
      console.log(this.listsong);
    });

  }
}
