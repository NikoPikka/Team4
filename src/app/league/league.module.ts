import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaguePage } from './league.page';

const routes: Routes = [
  {
    path: '',
    component: LeaguePage,
    children: [
     
      { path: 'standings-tab', loadChildren: '../standings-tab/standings-tab.module#StandingsTabPageModule' },
      { path: 'schedule-tab', loadChildren: '../schedule-tab/schedule-tab.module#ScheduleTabPageModule' },
      { path: 'scores-tab', loadChildren: '../scores-tab/scores-tab.module#ScoresTabPageModule' }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaguePage]
})
export class LeaguePageModule {}
