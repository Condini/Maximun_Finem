import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameficPageRoutingModule } from './gamefic-routing.module';

import { GameficPage } from './gamefic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameficPageRoutingModule
  ],
  declarations: [GameficPage]
})
export class GameficPageModule {}
