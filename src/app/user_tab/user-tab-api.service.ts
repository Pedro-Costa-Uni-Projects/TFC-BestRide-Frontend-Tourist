import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../user_tab/user';

@Injectable({
  providedIn: 'root',
})
export class DadosContaApiService {
  private url: String = '/users/';
  private url_get_user: String = '/getUser/';
  private url_cancel_usr: String = '/cancelAccount/';
  private url_update_user: string = '/updateUser/';
  private url_change_password: string = '/changePassword/';
  private url_change_user_image: String = '/updateImage/';

  public email_get: string;

  public name: string;
  public email: string;
  public city: string;
  public phone: string;
  public address: string;
  public postal: string;
  public id = localStorage.getItem('id');
  private data_user_alert_text = {};

  public user: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private nativeStorage: NativeStorage,
    public alertController: AlertController,
    private translateService: TranslateService
  ) {
    this.user = new User('', '', '', '', '', '');
    this.ngOnInit();
  }

  ngOnInit() {
    this.getUser();
    const social = localStorage.getItem('isSocialLogin');
    let acessToken = localStorage.getItem('token');
    console.log('IS social = ' + social);
    if (social == 'true') {
      this.http
        .get(
          'https://bestride.auth.eu-west-2.amazoncognito.com/oauth2/userInfo',
          {
            headers: {
              Authorization: 'Bearer ' + acessToken,
            },
          }
        )
        .subscribe((data) => {
          console.log('data');
          console.log(data);
          console.log(data['email']);
          this.user = new User(
            'google login',
            'google',
            '912',
            data['email'],
            'google',
            'google'
          );
        });
    } else {
      this.http
        .get(environment.apiUrl + this.url_get_user + acessToken)
        .subscribe((data) => {
          let phone = '' + data['UserAttributes'][7].Value;
          phone = phone.slice(3, 12);
          this.user = new User(
            data['UserAttributes'][5].Value,
            data['UserAttributes'][8].Value,
            phone,
            data['UserAttributes'][1].Value,
            data['UserAttributes'][5].Value,
            data['UserAttributes'][9].Value
          );
        });
    }
  }

  public getUser(): User {
    return this.user;
  }

  public updateImageUser(data: any) {
    const email = localStorage.getItem('email');
    console.log('data');
    console.log(data);

    this.http
      .put(
        environment.apiUrl +
          this.url_change_user_image +
          'austrixpamaj@gmail.com',
        {
          image: 'assasa',
        }
      )
      .subscribe(
        (resposta) => {
          console.log('OKAYYAYYAAYAYAYA');
        },
        (err) => {
          console.log(err);
        }
      );
  }

  public updatePassword(pass: any): void {
    this.http
      .put(environment.apiUrl + this.url_change_password + pass['token'], pass)
      .subscribe((resposta) => {
        console.log(resposta);
        // Sucess on changing password
        this.presentAlertPassword();
      });
  }

  async presentAlertPassword() {
    const alert = await this.alertController.create({
      header: 'Message',
      message: 'Your Password was Changed!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  public updateUser(data_account): void {
    const data = {
      name: data_account['name'],
      city: data_account['city'],
      email: data_account['email'],
      phone_number: data_account['phone'],
      address: data_account['address'],
    };

    const user_token = localStorage.getItem('token');
    this.http
      .put(environment.apiUrl + this.url_update_user + user_token, data)
      .subscribe((response) => {
        this.presentAlert();
      });
    // this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Message',
      cssClass: 'my-custom-class',
      message: 'Your Information was Updated !',
      buttons: ['Confirm'],
    });
    await alert.present();
  }

  public deleteUser(): void {
    let data = {
      token: localStorage.getItem('token'),
    };
    this.http
      .post(environment.apiUrl + this.url_cancel_usr, data)
      .subscribe((ans) => {
        this.router.navigate(['/login']);
        localStorage.removeItem('email');
        localStorage.removeItem('token');
      });
  }
}
