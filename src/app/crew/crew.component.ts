import { Component, OnInit } from '@angular/core';
import { ArtistService, User } from '../artist.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.sass']
})

export class CrewComponent implements OnInit {

	artists: Artist[];
	user: User;

  constructor( private artisteService: ArtistService ) { }

  ngOnInit() {

  	this.artists = this.artisteService.getArtists();
  }

  public showUser(){
  	console.log("showUser");
  	this.artisteService.getMysq().subscribe(data => this.user =  {
  		nom:(data as any).nom,
			pseudo:(data as any).pseudo,
			bio:(data as any).bio,
			info:(data as any).info,
			link:(data as any).link,
			url:(data as any).url,
			avatar:(data as any).avatar,
			photos:(data as any).photos,
			social:(data as any).social,
			extra:(data as any).extra,
			id:(data as any).id,
		})
  }
}
