import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-component',
  templateUrl: './popover-component.component.html',
  styleUrls: ['./popover-component.component.scss'],
})
export class PopoverComponentComponent implements OnInit {

  constructor(public popoverController: PopoverController ) { }

  ngOnInit() {}


  close(){
    this.popoverController.dismiss()
  }
}
