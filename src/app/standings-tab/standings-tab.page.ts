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

    this.getTeams()

    this.teams = []
    
  console.log(this.teams);
  console.log(this.competition_id);
  
  }
  
getTeams(){
  var x = 0;
  this.footballService
    .getData('/competitions/'+ this.competition_id + '/standings')
    .subscribe(data => {
      this.competition = data;
<<<<<<< HEAD
      for(let teams of this.competition.standings){
        for(let team_name of teams.table){
          console.log(this.competition_id)
          console.log("Tiimii " + team_name.team.name);
        }
        
=======
      for(let items of this.competition.standings){
        if(items.type == "TOTAL"){
        for(let team_name of items.table){
          this.teams[x] = team_name;
          x++;
         }
        } 
>>>>>>> d680b18bb4bd8a72785dd66dfa9c294c231f9e10
      }
    })

  
    
}

}
