import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiersPageRoutingModule } from './tiers-routing.module';

import { TiersPage } from './tiers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiersPageRoutingModule
  ],
  declarations: [TiersPage]
})
export class TiersPageModule {}
