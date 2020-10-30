import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
})
export class RewardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  listaRewards = [100, 200, 300, 400, 500, 600,
                  700, 800, 900, 1000, 1100, 1200,
                  1300, 1400, 1500, 1600, 1700]

}
