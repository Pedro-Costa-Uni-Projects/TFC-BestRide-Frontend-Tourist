import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  private url_create_booking = '/createTravel/';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  public booking_trip(data: any): void {
    let response = 0;
    this.http
      .post(environment.apiUrl + this.url_create_booking, data)
      .subscribe(
        (response) => {
          this.presentToast('your booking was successful!');
        },
        (err) => {
          this.presentToast('Error!');
        }
      );
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: '' + message,
      duration: 2000,
    });
    toast.present();
  }
}
