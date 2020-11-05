import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-ford-shop',
  templateUrl: './ford-shop.page.html',
  styleUrls: ['./ford-shop.page.scss'],
})
export class FordShopPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public navCtrl:NavController
  ) { }

  ngOnInit() {
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
