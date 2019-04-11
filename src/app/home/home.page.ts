import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  allMatches: any;
  matches1: any[];
  matches2: any[];
  matches3: any[];

  league1: string = 'Premier League';
  league2: string = 'Serie A';
  league3: string = 'Primera Division';

  leagueId1: number = 2021; // Premier League
  leagueId2: number = 2019; // Serie A
  leagueId3: number = 2014; // LA League / Primera Division

  upcomingOpen: boolean = false;
  scoresOpen: boolean = false;

  top1: boolean = false;
  top2: boolean = false;
  top3: boolean = false;


  constructor( private footballService: FootballService, private router: Router) {
  }

  ngOnInit() {
    this.topLeague1();
  }

  topLeague1() {
    this.upcomingOpen = false;
    this.scoresOpen = false;
    this.top1 = true;
    this.top2 = false;
    this.top3 = false;

    if (!this.matches1) {this.getData(this.leagueId1)};
  }

  topLeague2() {
    this.upcomingOpen = false;
    this.scoresOpen = false;
    this.top1 = false;
    this.top2 = true;
    this.top3 = false;

    if (!this.matches2) {this.getData(this.leagueId2)};
  }

  topLeague3() {
    this.upcomingOpen = false;
    this.scoresOpen = false;
    this.top1 = false;
    this.top2 = false;
    this.top3 = true;

    if (!this.matches3) {this.getData(this.leagueId3)};
  }

  getData(id) {
    this.footballService
    .getData('/competitions/' + id + '/matches')
    .subscribe(data => {
      this.allMatches = data as any[];
      //console.log(this.allMatches)

      if(id===this.leagueId1) {
        this.matches1= this.allMatches.matches;
        this.league1= this.allMatches.competition.name;
        console.log(this.matches1)
      }
      if(id===this.leagueId2) {
        this.matches2= this.allMatches.matches;
        this.league2= this.allMatches.competition.name;
        console.log(this.matches2)
      }
      if(id===this.leagueId3) {
        this.matches3= this.allMatches.matches;
        this.league3= this.allMatches.competition.name;
        console.log(this.matches3)
      }  

    })
  }


  upcoming() {
    this.upcomingOpen = (this.upcomingOpen === true) ? false: true;
  }

  scores() {
    this.scoresOpen = (this.scoresOpen === true) ? false: true;
  }

}

