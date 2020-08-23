import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Artist } from './artist';

export interface User{
  nom: string; 
  pseudo: string; 
  bio: string; 
  info: string; 
  link: string; 
  url: string; 
  avatar: string; 
  photos: string; 
  social: string; 
  extra: string; 
  id: number; 
}

@Injectable({
  providedIn: 'root'
})

export class ArtistService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://webvaps.lumberjacks-records.com/public/';
  
  getMysq(){
    return this.http.get(this.configUrl);
  }

  public getArtists(){
  	let artists:Artist[];
		
		artists=[
	new Artist( 11,
              'SinEsthetic',
              'www.lien1.com',
              'www.lien2.com',
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              'assets/images/sin/sin1.jpg',
              'assets/images/sin/sin2.jpg',
              'assets/images/sin/sin3.jpg',
              'assets/images/sin/alex.jpg' ),
  new Artist( 12, 
              'Raf Paf',
              'www.lien1.com',
              'www.lien2.com',
              "Raf Paf is a member of Quebec City’s Voie Alternative and Montreal’s Quite Nice Crew, collectives well knowed for taking part in multiple events in the Québec and Montreal areas as well as producing their owns. His musical performances usually revolve around Drum & Bass, Jungle and Techno but he also frequently ventures in the different spheres of house, breaks and bass music. Indeed, his wide musical range coupled with his excellent technique make the perfect cocktail to deliver great sets without fail. Raf Paf est membre des collectifs Voie Alternative et Quite Nice Crew, ces derniers étant bien connus pour leurs productions et leurs collaborations à de multiples événements à Québec, Montréal et leurs alentours. Ses performances musicales gravitent généralement autour des genres Drum & Bass/Jungle et Techno, mais il s’aventure aussi souvent dans les différentes sphères de la house, des breaks et de la bass music. En effet, sa grande diversité musicale couplée à son excellente technique sont le parfait cocktail pour livrer des sets mémorables à tous coups.",
              'assets/images/rafpaf/raf1.jpg',
              'assets/images/rafpaf/raf2.jpg',
              'assets/images/rafpaf/raf3.jpg',
              'assets/images/rafpaf/rafLogo.jpg' ),
  new Artist( 13,
              'Papi Gonzo',
              'www.lien1.com',
              'www.lien2.com',
              "Lorem Ips  um is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/gonzo/gonzo.jpg' ),
  new Artist( 14,
              'Shango',
              'www.lien1.com',
              'www.lien2.com',
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/shango/shango.jpg' ),
  new Artist( 15,
              'MNKM',
              'www.lien1.com',
              'www.lien2.com',
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              'assets/images/victor/vic1.jpg',
              'assets/images/victor/vic2.jpg',
              'assets/images/victor/vic3.jpg',
              'assets/images/victor/victor.jpg' ),
  new Artist( 16,
              'Telos',
              'www.lien1.com',
              'www.lien2.com',
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/thelos/marieeve.jpg' ),
  new Artist( 17,
              'Alakazoo',
              'www.lien1.com',
              'www.lien2.com',
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/alakazoo/vincent.jpg' ),
  new Artist( 18,
              'Brouillard',
              'www.lien1.com',
              'www.lien2.com',
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/felix/felix.jpg' ),
  new Artist( 19,
              'Kado',
              'www.lien1.com',
              'www.lien2.com',
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/kado/kado.jpg' ),
  new Artist( 20,
              'Thomders',
              'www.lien1.com',
              'www.lien2.com',
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/persona.png',
              'assets/images/thomas/thomas.jpg' )	
		]
	
  	return artists;

  }
  
  //getArtist(): Artist[] {
  	//return ARTISTS;
  //}
}
