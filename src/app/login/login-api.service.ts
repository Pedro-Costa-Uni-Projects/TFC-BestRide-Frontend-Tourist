import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  //endpoint da Api
  private url: String = '/users/';
  private url_info: String = '/userInfo/';
  private url_add_turist: String = '/userInfo/add_to_turist_role';
  private url_login: String = '/users/login/';

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController,
    private nativeStorage: NativeStorage
  ) {}

  public login_normal(email: String, password: String) {
    let data = {
      email: email,
      password: password,
    };

    this.http.post(environment.apiUrl + this.url_login, data).subscribe(
      (data) => {
        localStorage.setItem('id', data['user_iduser']); // guarda o id do user
        localStorage.setItem('email', data['email']); // guarda o id do user
        this.router.navigate(['/home_tab']);
      },
      (erro) => {
        this.showAlert();
      }
    );
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Credenciais Invalidas',
      message: 'Repita Novamente o Formulario',
      buttons: ['Tentar de Novo'],
    });

    await alert.present();
  }
}
