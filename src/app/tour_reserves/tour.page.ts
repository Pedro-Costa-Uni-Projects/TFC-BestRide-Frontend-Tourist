import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { CommentTripPage } from '../comment-trip/comment-trip.page';
import { PaymentPage } from '../payment/payment.page';
import { Tour } from './tour';
import { TourApiService } from './tour-api.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './tour.page.html',
  styleUrls: ['./tour.page.scss'],
})
export class TourPage implements OnInit {
  public tour_array: Array<Tour> = [];
  public loadingContent: boolean;

  constructor(
    private loadingCtrl: LoadingController,
    private tourAPI: TourApiService,
    public modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    const userID = localStorage.getItem('userID');
    this.tour_array = this.tourAPI.getTravelsByUser(userID);
    this.loadingContent = true;
    this.loadingCtrl
      .create({
        duration: 2000,
      })
      .then((response) => {
        response.present();
        response.onDidDismiss().then((response) => {
          this.loadingContent = false;
        });
      });
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

  public async comments(road_id: number) {
    const modal = await this.modalController.create({
      component: CommentTripPage,
      componentProps: {
        road_map_id: JSON.stringify(road_id),
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
