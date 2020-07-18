import { Injectable } from '@angular/core';
import { Artist } from './artist';
//import { ARTISTS 	} from './data';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  public getArtists(){
  	let artists:Artist[];
		
		artists=[
	new Artist( 11, 'Maître Gonzo', 'assets/placeholder.png' ),
  new Artist( 12, 'Synestetic', 'assets/placeholder.png' ),
  new Artist( 13, 'Shango','assets/placeholder.png' ),
  new Artist( 14, 'Manikeism','assets/placeholder.png' ),
  new Artist( 15, 'Telos','assets/placeholder.png' ),
  new Artist( 16, 'ThoDem','assets/placeholder.png' ),
  new Artist( 17, 'Alakazoo','assets/placeholder.png' ),
  new Artist( 18, 'Rikam','assets/placeholder.png' ),
  new Artist( 19, 'Sunboom','assets/placeholder.png' ),
  new Artist( 20, 'Jaia','assets/placeholder.png' )	
		]
	
  	return artists;

  }
  
  //getArtist(): Artist[] {
  	//return ARTISTS;
  //}
}
