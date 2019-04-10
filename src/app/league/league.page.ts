import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
})
export class LeaguePage {

  competition_id: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.competition_id = this.route.snapshot.paramMap.get('id');
  this.pushId();
  }

  pushId() {
    this.dataService
    .setData(this.competition_id);
  }



}
