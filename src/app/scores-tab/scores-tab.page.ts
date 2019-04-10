import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scores-tab',
  templateUrl: './scores-tab.page.html',
  styleUrls: ['./scores-tab.page.scss'],
})
export class ScoresTabPage implements OnInit {

  stats = [];
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
      this.stats = this.competition.matches.sort((b, a) => a.utcDate <= b.utcDate ? -1 : 1);
      for(let items of this.competition.matches){ 
        if(items.status == "FINISHED" ){  
        this.stats[x] = items;
          x++;
        }
      }  
        console.log(this.competition.matches);
        
    })
    
  }
}
