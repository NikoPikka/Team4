import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scores-tab',
  templateUrl: './scores-tab.page.html',
  styleUrls: ['./scores-tab.page.scss'],
})
export class ScoresTabPage implements OnInit {

  items = [];
  scores = [];
  myDate: String = new Date().toISOString();
  competition_id: string = "2021";
  competition: any;

  constructor(private footballService: FootballService, private router: Router) { }

  ngOnInit() {
    this.getScores()
  }

  getScores(){
    var x = 0;
    this.footballService
    .getData('/competitions/'+ this.competition_id + '/matches')
    .subscribe(data => {
      this.competition = data;
      for(let items of this.competition.matches){ 
          this.items[x] = items;
          x++;
      } 
      for(let items of this.competition.matches.score){
        this.scores[x] = items;
        x++;
      } 
        
    })
    
  }
}
