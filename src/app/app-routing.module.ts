import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'leagues', loadChildren: './leagues/leagues.module#LeaguesPageModule' },
  { path: 'league', loadChildren: './league/league.module#LeaguePageModule' },
  { path: 'team', loadChildren: './team/team.module#TeamPageModule' }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
