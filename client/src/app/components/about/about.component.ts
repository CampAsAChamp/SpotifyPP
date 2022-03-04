import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    name: string = null;
    profile_pic: string = "../../../assets/unknown.jpg";
    profile_link: string = null;

    //TODO: inject the Spotify service
    constructor(private spotifyService: SpotifyService) { }

    ngOnInit() { }


    /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
    In that function, update the name, profile_pic, and profile_link fields */
    onClick() {
        var aboutMePromise = this.spotifyService.aboutMe();

        // Set the fields to the response from the spotify service
        aboutMePromise.then((aboutMeInfo) => {
            this.name = aboutMeInfo.name;
            this.profile_pic = aboutMeInfo.imageURL;
            this.profile_link = aboutMeInfo.spotifyProfile;
        });
    }
}
