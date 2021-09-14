import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
declare var Stripe;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  private stripe = Stripe(
    'pk_test_51JUeiuImOAMxh8jbduIzG8rvhpIxMRnxnONEXx1D48XZugVncSYAJf4IJKKctefqXhEj3CBCUzSwOscGjdOCcPsP00MsXrafwI'
  );
  private card_number: any;
  private card_expiry: any;
  private card_cvc: any;
  public currencyIcon: string = 'logo-euro';
  public paymentAmount;
  private url_payment: string = '/makePayment/';

  constructor(
    private modalCtrl: ModalController,
    private toast: ToastController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.setupStripe();
  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: 'black',
        lineHeight: '24px',
        fontFamily: '"Arial", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '24px',
        '::placeholder': {
          color: 'black',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };

    this.card_number = elements.create('cardNumber', { style: style });

    this.card_expiry = elements.create('cardExpiry', { style: style });

    this.card_cvc = elements.create('cardCvc', { style: style });

    this.card_number.mount('#card-number');
    this.card_expiry.mount('#card-expiry');
    this.card_cvc.mount('#card-cvc');

    this.card_number.addEventListener('change', (event) => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    this.card_expiry.addEventListener('change', (event) => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    this.card_cvc.addEventListener('change', (event) => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    this.card_number.addEventListener('change', (event) => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.stripe.createSource(this.card_number).then((result) => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          this.showMessageToast('Your Payment was concluded !!');
          console.log('Sucess!');
          console.log(result['source'].id);
          const token = result['source'].id;
          const data = {
            token: token,
            amount: 0.6 * 100,
          };
          this.http.post(environment.apiUrl + this.url_payment, data).subscribe(
            (resp) => {
              this.modalCtrl.dismiss();
              this.showMessageToast('Tour payment made successfully!');
            },
            (err) => {}
          );
        }
      });
    });
  }

  async showMessageToast(msg: string) {
    const toast = await this.toast.create({
      message: '' + msg,
      duration: 2000,
    });
    toast.present();
  }

  cancel() {
    this.modalCtrl.dismiss();
  }
}
