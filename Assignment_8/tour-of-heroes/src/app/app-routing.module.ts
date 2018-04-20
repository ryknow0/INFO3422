import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
//add thee dashboard for use
import {DashboardComponent} from './dashboard/dashboard.component';
//add heroDetail component
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//Routes tell the router which view to display when a suer clicks a link or pastes a URL into the browser address bar
//Array of routes for dashboard
const routes: Routes = [
 
  {path: 'heroes', component: HeroesComponent }, //route of component path and name
  {path: 'dashboard', component: DashboardComponent },
  {path: 'detail/:id', component: HeroDetailComponent },//: indicates Id is a placeholder for the hero id
   //redirects a URL that fully matches the empty path to the route /dashboard
   {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  
];


@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)//calls forRoot() b/c the router is configured at the root level provides service and directives needed for routing and initial navigation
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
//exporting makes router directives available for use in the AppModule components that will need them
export class AppRoutingModule { }

//Reminder router must be initialized and staarted listening for changes