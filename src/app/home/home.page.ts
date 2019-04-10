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
  matches: any[];
  matches2: any[];
  upcomingOpen: boolean = false;
  scoresOpen: boolean = false;

  top1: boolean = true;
  top2: boolean = false;
  //top3: boolean = false;


  constructor( private footballService: FootballService, private router: Router) {
  }

  ngOnInit() {
    this.premierLeague();
  }

  premierLeague() {
    this.top1 = true;
    this.top2 = false;
    if(!this.matches) {this.getData(2021);}
  }

  serieA() {
    this.top1 = false;
    this.top2 = true;
    if(!this.matches2) {this.getData(2013);}
  }

  getData(id) {
    this.footballService
    .getData('/competitions/' + id + '/matches')
    .subscribe(data => {
      this.allMatches = data as any[];
      if(id=2021) {this.matches= this.allMatches.matches;}
      if(id=2013) {this.matches2= this.allMatches.matches;}          
    })
  }



  upcoming() {
    this.upcomingOpen = (this.upcomingOpen === true) ? false: true;
  }

  scores() {
    this.scoresOpen = (this.scoresOpen === true) ? false: true;
  }

}

