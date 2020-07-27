import { Component, OnInit } from '@angular/core';
import { window } from '../global';
@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.sass']
})
export class EvenementsComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
		console.log(window.bedu);	

  	if (window.FB && window.FB.init  ){
  		window.FB.init({ status: true, xfbml: true, version: 'v7.0' });
  	} else {
  		console.log("Pas de window.FB");
	    window.fbAsyncInit = function() {
    FB.init({
      appId      : '229188828097160',
      xfbml      : true,
      version    : 'v7.0'
    });
    console.log(window.fbAsyncInit);

    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
  	console.log('exec');
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   // original FB SDK script login goes here
  }
  	}
  }


