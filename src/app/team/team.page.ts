import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  team_name: string = "Testijoukkue"
  schedule: boolean = false;
  scores: boolean = false;
  roster: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  scheduleTab() {
    this.schedule = true;
    this.scores = false;
    this.roster = false;
  }

  scoresTab() {
    this.schedule = false;
    this.scores = true;
    this.roster = false;
  }

  rosterTab() {
    this.schedule = false;
    this.scores = false;
    this.roster = true;
  }

}
