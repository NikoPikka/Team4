import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DatePickerModule } from 'ionic4-date-picker';

import { IonicModule } from '@ionic/angular';

import { ScheduleTabPage } from './schedule-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatePickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScheduleTabPage]
})
export class ScheduleTabPageModule {}
