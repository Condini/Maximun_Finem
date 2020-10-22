import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MbscFormOptions, MbscListviewOptions }  from '@mobiscroll/angular';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  
  @ViewChild('barChart') barChart;
  @ViewChild('barChart2') barChart2;
  @ViewChild('hrzBarChart') hrzBarChart;
  @ViewChild('hrzBarChart3') hrzBarChart3;
  @ViewChild('adeline') adeline;

  bars: any;
  bars2: any;
  hrzBars: any;
  hrzBars3: any;
  colorArray: any;
  colorArray2: any;
  colorArray3: any;

  constructor() { }
  
  ionViewDidEnter() {
    this.generateColorArray(12);
    this.generateColorArray2(20);
    this.generateColorArray3(8);
    this.createBarChart();
    this.createHrzBarChart();
    this.createHrzBarChart3();
    this.createBarChart2();
  }

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }
  generateColorArray2(num) {
    this.colorArray2 = [];
    for (let i = 0; i < num; i++) {
      this.colorArray2.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  generateColorArray3(num) {
    this.colorArray3 = [];
    for (let i = 0; i < num; i++) {
      this.colorArray3.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  createBarChart() {
    let ctx = this.barChart.nativeElement
    ctx.height = 300;
    this.bars = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17, 23, 30, 10, 12],
          backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createHrzBarChart() {
    let ctx = this.hrzBarChart.nativeElement
    ctx.height = 300;
    this.hrzBars = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
          label: 'Litros',
          data: [82.5, 93.8, 75, 66.9, 76.9, 77.5, 110, 97, 83, 70, 70, 92],
          backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createHrzBarChart3() {
    let ctx = this.hrzBarChart3.nativeElement
    ctx.height = 200;
    this.hrzBars3 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        datasets: [{
          label: 'Graus Celsius (ºC)',
          data: [92.5, 83.8, 95, 76.9, 86.9, 87.5, 110, 97, 100, 100,
                85, 90.2, 92.234, 102.2, 110, 105.4, 100.4, 101, 102, 140.5],
  
          borderColor: this.colorArray2,// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            barPercentage: 0.9,
            gridLines: {
              offsetGridLines: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createBarChart2() {
    let ctx = this.barChart2.nativeElement
    ctx.height = 200;
    this.bars2 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [{
          label: 'km/l',
          data: [12.5, 13.8, 15, 26.9, 16.9, 17.5, 10, 17],
          backgroundColor: this.colorArray3, // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  ngOnInit() {
  }

  listaCarros = ['Ford-Ka', 'Ford Fiesta', 'Ford Sedan'];
}
