import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class RecoverAccountApiService {
  private url_recover: String = '/recoverUser/';
  private recover_alert_text = {};
  public language: string = this.trans.currentLang;

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController,
    private trans: TranslateService
  ) {}

  public recoverAccount(email: String): void {
    let postData = {
      email: email,
    };
    this.http
      .post(environment.apiUrl + this.url_recover, postData)
      .subscribe((data) => {
        localStorage.setItem('email', '' + email);
      });
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: '' + this.recover_alert_text['header'],
      message: '' + this.recover_alert_text['message'],
      buttons: ['' + this.recover_alert_text['buttons']],
    });

    await alert.present();
  }
}
