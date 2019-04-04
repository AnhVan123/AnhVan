import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  listData: any[];
  listsong: any[];
  lengthLisArtist = 0;
  lengthListSong = 0;
  length = 0;
  url = 'https://api.spotify.com/v1/search';
  url2 = 'https://api.spotify.com/v1/artists/';
  constructor(private artistService: ArtistService) {}

  ngOnInit() {}
  getArtist(event) {
    this.artistService.getAll(this.url, event.target.value).subscribe(data => {
      this.listData = data.artists.items;
      this.lengthLisArtist = this.listData.length;
      console.log(this.listData);
    });
    event.target.value = '';
    this.listsong = [];
    this.lengthListSong = 0;
  }

  onClick(id) {
    this.artistService.getSong(this.url2, id).subscribe(data => {
      this.listsong = data.tracks;
      this.lengthListSong = this.listsong.length;
      console.log(this.listsong);
    });
  }
}
