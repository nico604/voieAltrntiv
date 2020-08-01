import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.sass']
})
export class EvenementsComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
  	if (window.FB && window.FB.init  ){
  		window.FB.init({ status: true, xfbml: true, version: 'v7.0' });
  	} else {
	    window.fbAsyncInit = function() {
        window.FB.init({
          appId      : '229188828097160',
          xfbml      : true,
          version    : 'v7.0'
        });
        window.FB.AppEvents.logPageView();
      };
      (function(d, s, id){
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


