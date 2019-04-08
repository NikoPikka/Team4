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
  allMatches: any;
  matches: [];
  myDate: String = '2019-04-06'; //new Date().toISOString().substring(0, 10);

  matchDate: boolean = false;

  players: [];

  constructor(private footballService: FootballService, private router: Router) { }

  ngOnInit() {
    this.TeamInfo();
    this.TeamMatches();

  }

  TeamInfo() {
    this.footballService
    .getData('/teams/'+ this.team_id)
    .subscribe(data => {
      this.team = data;
      this.players= this.team.squad;
      console.log(this.team);
    })
  }

  TeamMatches() {
    this.footballService
    .getData('/teams/'+ this.team_id + '/matches/')
    .subscribe(data => {
      this.allMatches = data;
      this.matches= this.allMatches.matches;


    for (let match of this.matches) {   
      var test = match.utcDate; 
      if (test.includes(this.myDate)) {
        this.matchDate = true;
        console.log(match.utcDate);
      }

    }

      console.log(this.matches);
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
