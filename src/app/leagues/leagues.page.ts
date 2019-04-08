import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
leagues: any;
id: any;

  constructor(private footballService: FootballService, private router: Router) { }

  ngOnInit() {
    this.footballService
    .getData('/competitions/?plan=TIER_ONE')
    .subscribe(data => {
      this.leagues = data;
      console.log(this.leagues);
      for(let competitions of this.leagues.competitions)  {
          console.log(competitions.id);
      }
      })
  }
}

