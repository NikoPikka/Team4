import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-schedule-tab',
  templateUrl: './schedule-tab.page.html',
  styleUrls: ['./schedule-tab.page.scss'],
})
export class ScheduleTabPage implements OnInit {
  teams = [];
  myDate: string = new Date().toISOString().substr(0, 10);
  competition_id: string="2021";
  competition: any;
  testi: any;

  constructor(private footballService: FootballService, private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.getGames()
    this.testi = this.dataService.getData();
    console.log(this.testi);
    
  }
  getGames(){
    var x = 0;
    this.footballService
    .getData('/competitions/'+ this.competition_id + '/matches')
    .subscribe(data => {
      this.competition = data;
      for(let items of this.competition.matches){
        var gameDay = items.utcDate.substr(0, 10);
        if(items.status == "SCHEDULED"){
          this.teams[x] = items;
          x++;
        }
         
      }    
      console.log(this.myDate);
      console.log(gameDay);
      console.log();
    })

  }

  nextGames(){


  }

}
