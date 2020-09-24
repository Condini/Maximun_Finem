import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FordpassPageRoutingModule } from './fordpass-routing.module';

import { FordpassPage } from './fordpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FordpassPageRoutingModule
  ],
  declarations: [FordpassPage]
})
export class FordpassPageModule {}
