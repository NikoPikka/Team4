import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-scores-tab',
  templateUrl: './scores-tab.page.html',
  styleUrls: ['./scores-tab.page.scss'],
})
export class ScoresTabPage implements OnInit {

  stats: any[] = [];
  


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.stats = this.dataService.getTeamsScores();
  } 


}
