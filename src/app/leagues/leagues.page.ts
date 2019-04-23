import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
allLeagues: any[];
id: string;

  constructor(private footballService: FootballService, private router: Router) { }

  ngOnInit() {
    if (!this.allLeagues) {this.getData()};
  }


  getData()  {
    this.footballService
    .getData('/competitions/?plan=TIER_ONE')
    .subscribe(data => {
      this.allLeagues = data as any[];
      console.log('dataa');
      })
  }
}
