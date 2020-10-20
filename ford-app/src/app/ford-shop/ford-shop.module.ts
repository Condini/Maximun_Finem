import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FordShopPageRoutingModule } from './ford-shop-routing.module';

import { FordShopPage } from './ford-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FordShopPageRoutingModule
  ],
  declarations: [FordShopPage]
})
export class FordShopPageModule {}
