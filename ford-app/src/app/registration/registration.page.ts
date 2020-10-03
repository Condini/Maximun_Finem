import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  url = "http://localhost:4000/api/";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(data){
    console.log(data);
    this.http.post(this.url+'signup',{
        name:  data.name,
        cpf: data.cpf,
        email: data.email,
        regis: data.regis,
        password:   data.password
    }).subscribe({
    error: error => console.error('There was an error!', error)
    })


  }

}


