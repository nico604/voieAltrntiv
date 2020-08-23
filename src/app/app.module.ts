import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CrewComponent } from './crew/crew.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { CarouselModule } from "ngx-bootstrap/carousel";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    CrewComponent,
    EvenementsComponent,
    ContactComponent,
    ArtistDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: {animation:'Home'}  },
      { path: 'portfolio', component: PortfolioComponent, data: {animation:'Portfolio'} },
      { path: 'crew', component: CrewComponent, data: {animation:'Crew'} },
      { path: 'crew/:id', component: ArtistDetailComponent},  
      { path: 'evenements', component: EvenementsComponent },
      { path: 'contact', component: ContactComponent }
    ], {useHash: true}),
    AlertModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
