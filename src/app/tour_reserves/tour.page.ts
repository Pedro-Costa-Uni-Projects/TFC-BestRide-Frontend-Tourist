import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { PaymentPage } from '../payment/payment.page';
import { Tour } from './tour';
import { TourApiService } from './tour-api.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './tour.page.html',
  styleUrls: ['./tour.page.scss'],
})
export class TourPage implements OnInit {
  public tour_array: Array<Tour>;

  constructor(
    private loadingCtrl: LoadingController,
    private tourAPI: TourApiService,
    public modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading bookings...',
    });

    loading.present();

    const userID = localStorage.getItem('userID');
    this.tour_array = this.tourAPI.getTravelsByUser(userID);
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
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

  public payment() {
    let sum: number = 0;
    for (let i in this.tour_array) {
      sum += Number(this.tour_array[i].price);
    }
    this.presentModal(sum);
  }
}
