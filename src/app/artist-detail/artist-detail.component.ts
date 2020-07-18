import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.sass']
})
export class ArtistDetailComponent implements OnInit {

	artist:Artist;
	id;
	sub;
  constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               private _artistService:ArtistService) { }

  ngOnInit(): void {
		this.sub=this._Activatedroute.paramMap.subscribe(params => { 
  	  console.log(params);
    	this.id = params.get('id'); 
    	let artists=this._artistService.getArtists();
    	this.artist=artists.find(p => p.artistID==this.id);    
	  });
	}
	onBack(): void {
      this._router.navigate(['crew']);
   }

}
