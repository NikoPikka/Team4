import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores-tab',
  templateUrl: './scores-tab.page.html',
  styleUrls: ['./scores-tab.page.scss'],
})
export class ScoresTabPage implements OnInit {

  homeTeam = [];
  awayTeam = [];
  scores = [];
  myDate: String = new Date().toISOString();

  constructor() { }

  ngOnInit() {

    this.homeTeam = [
      "Everton",
      "Liverpool",
      "ManU",
      "ManC"
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
