import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FootballService } from '../football.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
})
export class LeaguePage {

  competition: any;
  competition_id: string;

  myDate: string = new Date().toISOString().substr(0, 10);

  teams_standings = [];
  teams_schedule = [];
  teams_scores = [];

  constructor(private footballService: FootballService, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.competition_id = this.route.snapshot.paramMap.get('id');
  this.pushId();
  }

  pushId() {
    this.dataService
    .setData(this.competition_id);
    this.getSchedule();
    this.getStandings();
    this.pushData(); 
  }

  pushData() {
    this.dataService
    .setTeamsSchedule(this.teams_schedule);

    this.dataService
    .setTeamsStandings(this.teams_standings);

    this.dataService
    .setTeamsScores(this.teams_scores);
    // .sort((b, a) => a.utcDate <= b.utcDate ? -1 : 1) ------------------- sorttaus...
  }

  getSchedule(){
    var x = 0;
    var y = 0;
    this.footballService
    .getData('/competitions/'+ this.competition_id + '/matches')
    .subscribe(data => {
      this.competition = data;
      for(let items of this.competition.matches){
        if(items.status == "SCHEDULED"){
          this.teams_schedule[x] = items;
          x++;
        }
        if (items.status == "FINISHED") {
          this.teams_scores[y] = items;
          y++;
        }       
      }
      
    })

  }

  getStandings(){
    var x = 0;
    this.footballService
      .getData('/competitions/'+ this.competition_id + '/standings')
      .subscribe(data => {
        this.competition = data;
        for(let items of this.competition.standings){
          if(items.type == "TOTAL"){
          for(let team_name of items.table){
            this.teams_standings[x] = team_name;
            x++;
           }
          } 
        }
      })
  
  }



}
