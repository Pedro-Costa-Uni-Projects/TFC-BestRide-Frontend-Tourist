import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CodeVerificationApiService {
  private url_confirm_account: String = '/confirmRecoverUser/';

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController
  ) {}

  public codeVerification(code: String, pass: string, email: string): void {
    let postData = {
      email: email,
      code: code,
      password: pass,
    };

    this.http
      .post(environment.apiUrl + this.url_confirm_account, postData)
      .subscribe(
        (data) => {
          //console.log(data);
          this.router.navigate(['/login']);
        },
        (err) => {
          //console.log(err);
        }
      );
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: '',
      message: '',
      buttons: [''],
    });

    await alert.present();
  }
}
