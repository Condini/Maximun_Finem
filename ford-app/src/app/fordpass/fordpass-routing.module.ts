import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FordpassPage } from './fordpass.page';

const routes: Routes = [
  {
    path: '',
    component: FordpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FordpassPageRoutingModule {}
