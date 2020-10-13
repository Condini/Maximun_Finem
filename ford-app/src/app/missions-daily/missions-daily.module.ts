import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionsDailyPageRoutingModule } from './missions-daily-routing.module';

import { MissionsDailyPage } from './missions-daily.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionsDailyPageRoutingModule
  ],
  declarations: [MissionsDailyPage]
})
export class MissionsDailyPageModule {}
