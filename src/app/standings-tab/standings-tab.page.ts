import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-standings-tab',
  templateUrl: './standings-tab.page.html',
  styleUrls: ['./standings-tab.page.scss'],
})
export class StandingsTabPage implements OnInit {
  
  teams = [];
  competition: any;
  competition_id: string ="2021";

  constructor(private footballService: FootballService, private router: Router) {
   
   }

  ngOnInit() {

    this.getTeams()
  
  }
  
getTeams(){
  var x = 0;
  this.footballService
    .getData('/competitions/'+ this.competition_id + '/standings')
    .subscribe(data => {
      this.competition = data;
      for(let items of this.competition.standings){
        if(items.type == "TOTAL"){
        for(let team_name of items.table){
          this.teams[x] = team_name;
          x++;
         }
        } 
      }
    })

  
    
}

}
