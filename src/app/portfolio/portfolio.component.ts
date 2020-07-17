import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

	page = {
		title: 'Portfolio',
    subtitle: 'Portfolio',
    content: 'Portfolio content.',
    image: 'assets/mastering.jpg'
	}

  constructor() { }

  ngOnInit(): void {
  }

}
