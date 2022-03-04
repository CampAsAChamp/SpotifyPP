import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
  artistId: string;
  artist: ArtistData;
  relatedArtists: ArtistData[];
  topTracks: TrackData[];
  albums: AlbumData[];


  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  // TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, artist's albums
  ngOnInit() {
    // Set the artistId field to the id in the URL
    this.artistId = this.route.snapshot.paramMap.get('id');

    // Get the artist info
    var artistResponse = this.spotifyService.getArtist(this.artistId);
    artistResponse.then((artistInfo) => {
      this.artist = artistInfo;
    });

    // Get the releated artists
    var relatedArtistsResponse = this.spotifyService.getRelatedArtists(this.artistId);
    relatedArtistsResponse.then((relatedArtistsInfo) => {
      this.relatedArtists = relatedArtistsInfo;
    });

    // Get the top tracks for the artist
    var topTracksResponse = this.spotifyService.getTopTracksForArtist(this.artistId);
    topTracksResponse.then((topTracksInfo) => {
      this.topTracks = topTracksInfo;
    });

    // Get the artists albums
    var artistsAlbumsResponse = this.spotifyService.getAlbumsForArtist(this.artistId);
    artistsAlbumsResponse.then((artistsAlbumsInfo) => {
      this.albums = artistsAlbumsInfo;
    });
  }

}