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

  constructor( private footballService: FootballService, private router: Router) {
  }

  ngOnInit() {
    console.log(Headers);
    console.log('ngOnInit... works');

    //let headers = new Headers();
    //headers.append('X-Auth-Token', '465aa38216ff481094105918779ccebc');


    this.footballService
    .getData('')
    .subscribe(data => {
      console.log(data);
      this.items = data;
    })
  }

}

