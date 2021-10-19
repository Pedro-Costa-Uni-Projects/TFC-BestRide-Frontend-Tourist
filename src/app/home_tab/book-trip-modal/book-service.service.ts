import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PaymentPage } from 'src/app/payment/payment.page';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  private url_create_booking = '/createTravel/';

  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    public modalController: ModalController
  ) {}

  public booking_trip(data: any): void {
    let response = 0;
    this.http
      .post(environment.apiUrl + this.url_create_booking, data)
      .subscribe(
        (response) => {
          console.log(response);
          const price = response['price'];
          this.presentModal(price);
        },
        (err) => {
          //this.presentToast('Error!');
          console.log(err);
        }
      );
  }

  async presentModal(total: number) {
    const modal = await this.modalController.create({
      component: PaymentPage,
      cssClass: 'my-custom-class',
      componentProps: {
        paymentAmount: total,
      },
    });
    return await modal.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: '' + message,
      duration: 2000,
    });
    toast.present();
  }
}
