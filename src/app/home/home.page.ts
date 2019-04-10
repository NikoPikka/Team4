import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  matches: any[];
  test: string = '204950';

  constructor( private footballService: FootballService, private router: Router) {
  }

  ngOnInit() {
    this.footballService
    .getData('/competitions/2021/matches')
    .subscribe(data => {
      this.matches = data;
      console.log(this.matches);
    })
  }

}

