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


}
