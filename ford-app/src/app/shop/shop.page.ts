import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(public navCtrl:NavController, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  } 

  listaCarros = ['Ford-Ka', 'Ford Fiesta', 'Ford Sedan'];


  habilita: Boolean;
  habilitaItens() {
    this.habilita = true;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Compra realizada com sucesso!',
      duration: 2000,
      color: 'success',
      position: 'top',
      cssClass: 'cssDoToast'
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deseja realizar a compra?',
      buttons: [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.navigateRoot('/main');
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }


  item1: boolean;
  precoItem1 = 500;
  item2: boolean;
  precoItem2 = 150;
  item3: boolean;
  precoItem3 = 300;
  item4: boolean;
  precoItem4 = 3000;
  item5: boolean;
  precoItem5 = 2000;
  item6: boolean;
  precoItem6 = 200;
  item7: boolean;
  precoItem7 = 90;
  item8: boolean;
  precoItem8 = 2000;
  item9: boolean;
  precoItem9 = 1500;
  item10: boolean;
  precoItem10 = 200;

  valorFinal = 0;

  alteraValorFinal(){
    if(this.item1 == true){
      return this.valorFinal = this.valorFinal + this.precoItem1;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem1;
    }
  }
  //
  alteraValorFinal2(){
    if(this.item2 == true){
      return this.valorFinal = this.valorFinal + this.precoItem2;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem2;
    }
  }
  //
  alteraValorFinal3(){
    if(this.item3 == true){
      return this.valorFinal = this.valorFinal + this.precoItem3;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem3;
    }
  }
  //
  alteraValorFinal4(){
    if(this.item4 == true){
      return this.valorFinal = this.valorFinal + this.precoItem4;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem4;
    }
  }
  //
  alteraValorFinal5(){
    if(this.item5 == true){
      return this.valorFinal = this.valorFinal + this.precoItem5;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem5;
    }
  }
  //
  alteraValorFinal6(){
    if(this.item6 == true){
      return this.valorFinal = this.valorFinal + this.precoItem6;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem6;
    }
  }
  //
  alteraValorFinal7(){
    if(this.item7 == true){
      return this.valorFinal = this.valorFinal + this.precoItem7;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem7;
    }
  }
  //
  alteraValorFinal8(){
    if(this.item8 == true){
      return this.valorFinal = this.valorFinal + this.precoItem8;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem8;
    }
  }
  //
  alteraValorFinal9(){
    if(this.item9 == true){
      return this.valorFinal = this.valorFinal + this.precoItem9;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem9;
    }
  }
  //
  alteraValorFinal10(){
    if(this.item10 == true){
      return this.valorFinal = this.valorFinal + this.precoItem10;
    }
    else{
      return this.valorFinal = this.valorFinal - this.precoItem10;
    }
  }

}
