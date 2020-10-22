import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiersPage } from './tiers.page';

const routes: Routes = [
  {
    path: '',
    component: TiersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiersPageRoutingModule {}
