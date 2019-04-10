import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
leagues: any;
id: string;


  constructor(private footballService: FootballService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.footballService
    .getData('/competitions/?plan=TIER_ONE')
    .subscribe(data => {
      this.leagues = data;
      console.log(this.leagues);
      for(let competitions of this.leagues.competitions)  {
      }
      })
  }
}
