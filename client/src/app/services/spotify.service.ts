import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';
import { TrackFeature } from '../data/track-feature';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  expressBaseUrl: string = 'http://localhost:8888';

  constructor(private http: HttpClient) { }

  private sendRequestToExpress(endpoint: string): Promise<any> {
    //TODO: use the injected http Service to make a get request to the Express endpoint and return the response.
    //the http service works similarly to fetch(). It may be useful to call .toPromise() on any responses.
    //update the return to instead return a Promise with the data from the Express server

    var finalEndpoint = this.expressBaseUrl.concat(endpoint);
    return this.http.get(finalEndpoint).toPromise();
  }

  aboutMe(): Promise<ProfileData> {
    //This line is sending a request to express, which returns a promise with some data. We're then parsing the data 
    return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category: string, resource: string): Promise<ResourceData[]> {
    //TODO: identify the search endpoint in the express webserver (routes/index.js) and send the request to express.
    //Make sure you're encoding the resource with encodeURIComponent().
    //Depending on the category (artist, track, album), return an array of that type of data.
    //JavaScript's "map" function might be useful for this, but there are other ways of building the array.

    var finalEndpoint = this.expressBaseUrl.concat("/search/", category, "/", encodeURIComponent(resource));
    // console.log("GET " + finalEndpoint);
    var response = this.http.get(finalEndpoint);
    var itemsArr = [];
    var resourceArr: Array<ResourceData> = [];

    // Chain promises to wait for the promise to return, then to wait for us to process the data
    return response.toPromise().then((searchInfo) => {

      switch (category) {
        case "artist":
          // @ts-ignore  -- For VS Code to ignore linting error
          itemsArr = searchInfo.artists.items;
          break;
        case "album":
          // @ts-ignore  -- For VS Code to ignore linting error
          itemsArr = searchInfo.albums.items;
          break;
        case "track":
          // @ts-ignore  -- For VS Code to ignore linting error
          itemsArr = searchInfo.tracks.items;
          break;
      }

    }).then(() => {        // End of first then
      for (let i = 0; i < itemsArr.length; i++) {
        switch (category) {
          case "artist":
            resourceArr.push(new ArtistData(itemsArr[i]));
            break;
          case "album":
            resourceArr.push(new AlbumData(itemsArr[i]));
            break;
          case "track":
            resourceArr.push(new TrackData(itemsArr[i]));
            break;
        }
      }

      return resourceArr;
    });   // End of second then
  }

  getArtist(artistId: string): Promise<ArtistData> {
    //TODO: use the artist endpoint to make a request to express.
    //Again, you may need to encode the artistId.
    return this.sendRequestToExpress('/artist/' + artistId).then((data) => {
      return new ArtistData(data);
    });
  }

  getRelatedArtists(artistId: string): Promise<ArtistData[]> {
    //TODO: use the related artist endpoint to make a request to express and return an array of artist data.
    var relatedArtists: Array<ArtistData> = [];

    return this.sendRequestToExpress('/artist-related-artists/' + artistId).then((data) => {
      for (let i = 0; i < data.artists.length; i++) {
        relatedArtists.push(new ArtistData(data.artists[i]));
      }
      return relatedArtists;
    });
  }

  getTopTracksForArtist(artistId: string): Promise<TrackData[]> {
    //TODO: use the top tracks endpoint to make a request to express.
    var topTracks: Array<TrackData> = [];

    return this.sendRequestToExpress('/artist-top-tracks/' + artistId).then((data) => {
      for (let i = 0; i < data.tracks.length; i++) {
        topTracks.push(new TrackData(data.tracks[i]));
      }
      return topTracks;
    });
  }

  getAlbumsForArtist(artistId: string): Promise<AlbumData[]> {
    //TODO: use the albums for an artist endpoint to make a request to express.
    var artistsAlbums: Array<AlbumData> = [];

    return this.sendRequestToExpress('/artist-albums/' + artistId).then((data) => {
      for (let i = 0; i < data.items.length; i++) {
        artistsAlbums.push(new AlbumData(data.items[i]));
      }
      return artistsAlbums;
    });
  }

  getAlbum(albumId: string): Promise<AlbumData> {
    //TODO: use the album endpoint to make a request to express.
    return this.sendRequestToExpress('/album/' + albumId).then((data) => {
      return new AlbumData(data);
    });
  }

  getTracksForAlbum(albumId: string): Promise<TrackData[]> {
    //TODO: use the tracks for album endpoint to make a request to express.
    var albumTracks: Array<TrackData> = [];

    return this.sendRequestToExpress('/album-tracks/' + albumId).then((data) => {
      for (let i = 0; i < data.items.length; i++) {
        albumTracks.push(new TrackData(data.items[i]));
      }
      return albumTracks
    });
  }

  getTrack(trackId: string): Promise<TrackData> {
    //TODO: use the track endpoint to make a request to express.
    return this.sendRequestToExpress('/track/' + trackId).then((data) => {
      return new TrackData(data);
    });
  }

  getAudioFeaturesForTrack(trackId: string): Promise<TrackFeature[]> {
    //TODO: use the audio features for track endpoint to make a request to express.
    var audioFeatures: Array<TrackFeature> = [];
    var FeatureTypes = ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'];

    return this.sendRequestToExpress('/track-audio-features/' + trackId).then((data) => {
      var audioFeatureKeys: string[] = Object.keys(data);
      var audioFeatureValues: number[] = Object.values(data);

      for (var i = 0; i < audioFeatureKeys.length; i++) {

        // Check across all the approved feature types
        for (var j = 0; j < FeatureTypes.length; j++) {
          if (audioFeatureKeys[i] == FeatureTypes[j]) {
            audioFeatures.push(new TrackFeature(audioFeatureKeys[i], audioFeatureValues[i]));
          }
        }
      }
      return audioFeatures
    });
  }
}
