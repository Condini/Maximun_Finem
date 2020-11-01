import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  url = "http://localhost:4000/api/";
  validUser;
  User;

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) { }
  
  ngOnInit() {
  }
  onSubmit(data){
    console.log(data);
    this.http.post(this.url+'signin',{
        email: data.email,
        password:   data.password
    }).subscribe({
    next: res => {this.validUser = res;
      console.log(this.validUser);
      if(this.validUser.valid){
        this.User = data.email;
        this.router.navigate(['/main'])

      }
      else{
        this.presentAlert();
      }
    },
    error: error => console.error('There was an error!', error)
    })


  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usuário Inválido!',
      buttons: ['OK']
    });

    await alert.present();
  }
}


