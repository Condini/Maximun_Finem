import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameficPage } from './gamefic.page';

const routes: Routes = [
  {
    path: '',
    component: GameficPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameficPageRoutingModule {}
