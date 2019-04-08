import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';

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

  team_id: string = '19';
  team: any;
  myDate: String = new Date().toISOString();

  constructor(private footballService: FootballService, private router: Router) { }

  ngOnInit() {
      this.footballService
      .getData('/teams/'+ this.team_id)
      .subscribe(data => {
        this.team = data;
        console.log(this.team);
      })
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
