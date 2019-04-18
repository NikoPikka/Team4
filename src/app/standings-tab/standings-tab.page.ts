import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
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
  teams = [];
  competition: any;
  competition_id: string ="2021";

  constructor(private footballService: FootballService, private router: Router,
    private dataService: DataService, public popoverController: PopoverController) {
   
   }

  ngOnInit() {

    this.competition_id = this.dataService.getData();
    this.getTeams()

    console.log("1");
    console.log("2");
  console.log(this.teams);
  console.log(this.competition_id);
    this.dataService.setData("Haloo");
  
  }
  
getTeams(){
  var x = 0;
  this.footballService
    .getData('/competitions/'+ this.competition_id + '/standings')
    .subscribe(data => {
      this.competition = data;
      for(let items of this.competition.standings){
        if(items.type == "TOTAL"){
        for(let team_name of items.table){
          this.teams[x] = team_name;
          x++;
         }
        } 
      }
    })
    
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
