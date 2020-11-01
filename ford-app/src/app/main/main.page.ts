import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
class User{
 user: string;
 urls: string;
 lvl: number;
 xp: number;
 xpt: number;
 obj: number;   
}

const ever = new User();
ever.user = 'Everson Olhos';
ever.urls = 'https://criadoresid.com/wp-content/uploads/2019/01/Criador_Everson-Zoio_youtuber_criadoresid-4.jpg';
ever.lvl = 100;
ever.xp = 2500;
ever.xpt = 7000;
ever.obj = 50;

const xan = new User();
xan.user =  "Alexandre Grande";
xan.urls = 'https://pbs.twimg.com/profile_images/1306776294278004736/64yfTxt9.jpg';
xan.lvl = 36;
xan.xp = 700;
xan.xpt = 1000;
xan.obj = 20;

export class MainPage implements OnInit {
  
  constructor(public navCtrl:NavController, public alertController: AlertController, public loginpage: LoginPage) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deseja sair?',
      buttons: [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.navigateRoot('/home');
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  usercheck(){
    if(this.loginpage.User="digo.kenji@hotmail.com"){
      return ever;
    }
    else{
      return xan;
    }
    
  
  }




  ngOnInit() {
  }

}
