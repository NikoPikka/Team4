import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-tab',
  templateUrl: './schedule-tab.page.html',
  styleUrls: ['./schedule-tab.page.scss'],
})
export class ScheduleTabPage implements OnInit {
  teams = [];
  myDate: string = new Date().toISOString();
  competition_id: string="2021";
  competition: any;

  constructor(private footballService: FootballService, private router: Router) {}

  ngOnInit() {
    this.getGames()
  }
  getGames(){
    var x = 0;
    this.footballService
    .getData('/competitions/'+ this.competition_id + '/matches')
    .subscribe(data => {
      this.competition = data;
      for(let items of this.competition.matches){
        this.teams[x] = items;
          x++;
        } 
      console.log(this.teams[30]);
    })
    
  }

}
