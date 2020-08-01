import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';   
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from "./animations";

import * as myGlobals from 'globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass',],
  animations:[
  	slideInAnimation
  ]
})

export class AppComponent  implements OnInit {
  title = 'Est. Circa 2013';
  constructor() {
	}

	prepareRoute(outlet: RouterOutlet) {
  	console.log(outlet.activatedRouteData);
  	return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}

	ngOnInit(): void {

  }


}
