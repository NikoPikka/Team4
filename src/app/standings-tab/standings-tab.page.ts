import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-standings-tab',
  templateUrl: './standings-tab.page.html',
  styleUrls: ['./standings-tab.page.scss'],
})
export class StandingsTabPage implements OnInit {
  teams: any[] = [];

  constructor(private router: Router, private dataService: DataService) {
   
   }

  ngOnInit() {
    this.teams = this.dataService.getTeamsStandings();
    console.log(this.teams);
  }
  


}
