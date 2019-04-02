import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standings-tab',
  templateUrl: './standings-tab.page.html',
  styleUrls: ['./standings-tab.page.scss'],
})
export class StandingsTabPage implements OnInit {
  
  teams = [];
  games = [];

  constructor() { }

  ngOnInit() {

    this.teams = [
      "ManC",
      "Liverpool",
      "Everton",
      "ManU"
    ]

    this.games = [
      "2",
      "2",
      "1",
      "1"
    ]
  }

}
