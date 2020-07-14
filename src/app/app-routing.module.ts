import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CrewComponent } from './crew/crew.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'crew', component: CrewComponent },
	{ path: 'evenements', component: EvenementsComponent },
	{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
