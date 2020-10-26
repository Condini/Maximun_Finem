import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HomePopoverComponent } from './home-popover/home-popover.component'

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.page.html',
  styleUrls: ['./tiers.page.scss'],
})
export class TiersPage implements OnInit {

  constructor(public popoverController: PopoverController) { }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  
  ngOnInit() {
  }

}
