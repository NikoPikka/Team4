import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  schedule: boolean = true;
  scores: boolean = false;
  roster: boolean = false;

  team_id: string = '64';
  team: any;
  allMatches: any;
  matches: any[];
  myDate: String = new Date().toISOString().substring(0, 10);

  matchToday: boolean = false;
  utcDate: any;


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
      this.matches= this.allMatches.matches.sort((a, b) => a.utcDate <= b.utcDate ? -1 : 1);

      

    for (let match of this.matches) {   
      var mdate = match.utcDate;
      if (mdate.includes(this.myDate)) {
        this.matchToday = true;
        console.log(match.utcDate);
        match["today"] = "yes";
      }
      else {
        this.matchToday = false;
        match["today"] = "no";
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
