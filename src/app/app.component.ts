import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as myGlobals from 'globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Voie alternatif';
  constructor(public router: Router) {
	}

	isShown(){
	  console.log(this.router.url);
	} 
}
