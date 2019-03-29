import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-tab',
  templateUrl: './schedule-tab.page.html',
  styleUrls: ['./schedule-tab.page.scss'],
})
export class ScheduleTabPage implements OnInit {
  team1s = [];
  team2s = [];
  scores = [];
  constructor() {}

  ngOnInit() {
    this.team1s = [
      "Everton",
      "Liverpool",
      "Manchester United"
    ];

    this.team2s = [
      "Burnley",
      "Brighton",
      "Arsenal"
    ];

    this.scores = [
      "0 - 0",
      "1 - 1",
      "2 - 2"
    ];
  }
    
}
