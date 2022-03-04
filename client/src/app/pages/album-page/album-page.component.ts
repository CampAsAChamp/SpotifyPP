import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
  albumId: string;
  album: AlbumData;
  tracks: TrackData[];


  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  //TODO: inject spotifyService and use it to get the album data and the tracks for the album
  ngOnInit() {
    // Set the albumId field to the id in the URL
    this.albumId = this.route.snapshot.paramMap.get('id');

    // Get the album info
    var albumResponse = this.spotifyService.getAlbum(this.albumId);
    albumResponse.then((albumInfo) => {
      this.album = albumInfo;
    });

    // Get the tracks for the album
    var albumTracksResponse = this.spotifyService.getTracksForAlbum(this.albumId);
    albumTracksResponse.then((albumTracksInfo) => {
      this.tracks = albumTracksInfo;
    });
  }

}
