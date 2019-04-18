import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { StandingsTabPage } from './standings-tab.page';
import { PopoverComponentComponent } from '../popover-component/popover-component.component';

const routes: Routes = [
  {
    path: '',
    component: StandingsTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [PopoverComponentComponent],
  declarations: [StandingsTabPage, PopoverComponentComponent]
})
export class StandingsTabPageModule {}
