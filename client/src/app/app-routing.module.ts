import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';  // Place to go once the routes are configured
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

// Tells the router which view to display when a user clicks a link or pastes URL into address bar
const routes: Routes = [
	{ path: 'artist/:id', component: ArtistPageComponent },
	{ path: 'track/:id', component: TrackPageComponent },
	{ path: 'album/:id', component: AlbumPageComponent },
	{ path: '', component: HomePageComponent }
];

@NgModule({
	// Initializes the router and starts it listening for browser location changes
	// Adds RouterModule to the import array and configures it with routes specified above
	imports: [RouterModule.forRoot(routes, {
		onSameUrlNavigation: 'reload'
	})],

	// Exports RouterModule so it will be available throughout the app
	exports: [RouterModule]
})
export class AppRoutingModule { }
