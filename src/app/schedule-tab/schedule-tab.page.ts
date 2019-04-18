import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-schedule-tab',
  templateUrl: './schedule-tab.page.html',
  styleUrls: ['./schedule-tab.page.scss'],
})
export class ScheduleTabPage implements OnInit {

  teams: any[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.teams = this.dataService.getTeamsSchedule();
    console.log(this.teams);
    
  }



}
