import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor() { }

  ngOnInit() {
  } 

  listaCarros = ['Ford-Ka', 'Ford Fiesta', 'Ford Sedan'];


  habilita: Boolean;
  habilitaItens() {
    this.habilita = true;
  }
}
