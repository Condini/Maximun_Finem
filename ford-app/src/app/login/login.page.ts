import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  url = "http://localhost:4000/api/";
  validUser;

  constructor(private http: HttpClient, private router: Router) { }
  
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
        this.router.navigate(['/main'])

      }
      else{
        alert("Usuário Inválido!")
      }
    },
    error: error => console.error('There was an error!', error)
    })


  }
}
