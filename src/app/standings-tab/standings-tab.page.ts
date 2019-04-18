import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponentComponent } from '../popover-component/popover-component.component';


@Component({
  selector: 'app-standings-tab',
  templateUrl: './standings-tab.page.html',
  styleUrls: ['./standings-tab.page.scss'],
})
export class StandingsTabPage implements OnInit {
  teams: any[] = [];


  constructor(private router: Router, private dataService: DataService, public popoverController: PopoverController) {
   
   }

  ngOnInit() {
    this.teams = this.dataService.getTeamsStandings();
    console.log(this.teams);
  }
  

async popOver(ev: any) {
  const popover = await this.popoverController.create({
    component: PopoverComponentComponent,
    event: ev,
    translucent: true
  });
  return await popover.present();

}
}
