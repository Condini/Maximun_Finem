import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbscModule } from '@mobiscroll/angular';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StatisticsPageRoutingModule } from './statistics-routing.module';

import { StatisticsPage } from './statistics.page';

@NgModule({
  imports: [
    CommonModule,
    MbscModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HttpClientJsonpModule,
    StatisticsPageRoutingModule
  ],
  declarations: [StatisticsPage]
})
export class StatisticsPageModule {}
