import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'leagues', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'leagues', loadChildren: './leagues/leagues.module#LeaguesPageModule' },
  { path: 'league/:id', loadChildren: './league/league.module#LeaguePageModule' },
  { path: 'team/:id', loadChildren: './team/team.module#TeamPageModule' }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
