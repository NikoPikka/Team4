import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  items: any;
  test: string = '204950';

  constructor( private footballService: FootballService, private router: Router) {
  }

  ngOnInit() {

    // testing..................................
    this.footballService
    .getData('/matches/'+ this.test)
    .subscribe(data => {
      console.log(data);
      this.items = data;
    })
  }

}

