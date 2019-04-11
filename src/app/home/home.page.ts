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

  upcomingOpen: boolean = false;
  scoresOpen: boolean = false;

  top1: boolean = false;
  top2: boolean = false;
  top3: boolean = false;




  constructor( private footballService: FootballService, private router: Router) {
  }

  ngOnInit() {
    this.premierLeague();
  }

  premierLeague() {
    this.upcomingOpen = false;
    this.scoresOpen = false;
    this.top1 = true;
    this.top2 = false;
    this.top3 = false;

    if (!this.matches1) {this.getData(2021)};
  }

  serieA() {
    this.upcomingOpen = false;
    this.scoresOpen = false;
    this.top1 = false;
    this.top2 = true;
    this.top3 = false;

    if (!this.matches2) {this.getData(2013)};
  }

  laLeague() {
    this.upcomingOpen = false;
    this.scoresOpen = false;
    this.top1 = false;
    this.top2 = false;
    this.top3 = true;

    if (!this.matches3) {this.getData(2014)};
  }

  getData(id) {
    this.footballService
    .getData('/competitions/' + id + '/matches')
    .subscribe(data => {
      this.allMatches = data as any[];
      if(id===2021) {this.matches1= this.allMatches.matches; console.log(this.matches1)}
      if(id===2013) {this.matches2= this.allMatches.matches; console.log(this.matches2)}
      if(id===2014) {this.matches3= this.allMatches.matches; console.log(this.matches3)}           
    })
  }



  upcoming() {
    this.upcomingOpen = (this.upcomingOpen === true) ? false: true;
  }

  scores() {
    this.scoresOpen = (this.scoresOpen === true) ? false: true;
  }

}

