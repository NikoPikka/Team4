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

  constructor(private footballService: FootballService, private router: Router,public navParams: NavParams) {
    this.competition_id = navParams.get("id");
   }

  ngOnInit() {

    this.teams = []
    
  console.log(this.teams);
  console.log(this.competition_id);
  
  }
  
getTeams(){
  this.footballService
    .getData('/competitions/'+ this.competition_id + '/standings')
    .subscribe(data => {
      this.competition = data;
      for(let teams of this.competition.standings){
        for(let team_name of teams.table){
          console.log(this.competition_id)
          console.log("Tiimii " + team_name.team.name);
        }
        
      }
    })
    
}

}
