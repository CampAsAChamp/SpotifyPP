import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})

export class SearchComponent implements OnInit {
  searchString: string;
  searchCategory: string = 'artist';
  searchCategories: string[] = ['artist', 'album', 'track'];
  resources: ResourceData[];

  constructor(private spotifyService: SpotifyService) { }


  ngOnInit() {
  }

  search() {
    //TODO: call search function in spotifyService and parse response

    var response = this.spotifyService.searchFor(this.searchCategory, this.searchString);
    response.then((searchInfo) => {

      // Set my resources to the info we searched for
      this.resources = searchInfo;
    });
  }

  isTrack(): boolean {
    if (this.searchCategory === "artist" || this.searchCategory === "album") {
      return false;
    }
    else {
      return true;
    }
    //return this.searchCategory === "track";
  }

}
