import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  	animations: [
    trigger('triggyName', [
      // ...
      state('open', style({
      	display: 'block',
      	background: 'green'
      })),
      state('closed', style({
      	display: 'none',

      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ], 
})
export class HomeComponent implements OnInit {

  constructor() { }
  myAnim = true;
  myLogo = true;
  ngOnInit(): void {

  }
  toggleAnimation(){
  	this.myAnim = !this.myAnim;
  }

  toggleLogo(){
  	this.myLogo = !this.myLogo;
  }

}
