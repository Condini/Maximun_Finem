import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FordShopPage } from './ford-shop.page';

const routes: Routes = [
  {
    path: '',
    component: FordShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FordShopPageRoutingModule {}
