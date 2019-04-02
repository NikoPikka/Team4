import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-tab',
  templateUrl: './schedule-tab.page.html',
  styleUrls: ['./schedule-tab.page.scss'],
})
export class ScheduleTabPage implements OnInit {
  homeTeam = [];
  awayTeam = [];
  scores = [];
  myDate: String = new Date().toISOString();

  constructor() {}

  ngOnInit() {

    this.homeTeam = [
      "Everton",
      "Liverpool",
      "ManU"
    ];

    this.awayTeam = [
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
