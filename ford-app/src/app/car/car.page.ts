import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  ngOnInit() {
  }

  listaCarros = ['Ford-Ka', 'Ford Fiesta', 'Ford Sedan'];
}
