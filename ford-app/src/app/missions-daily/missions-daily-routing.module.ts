import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionsDailyPage } from './missions-daily.page';

const routes: Routes = [
  {
    path: '',
    component: MissionsDailyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionsDailyPageRoutingModule {}
