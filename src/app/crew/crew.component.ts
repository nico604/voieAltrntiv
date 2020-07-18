import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.sass']
})

export class CrewComponent implements OnInit {

	artists:Artist[];


  constructor(private artisteService:ArtistService) { }
	//artists = ARTISTS;
  ngOnInit() {
  	this.artists=this.artisteService.getArtists();
  }


}
