import { Component, ContentChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonInput } from '@ionic/angular';
import { DadosContaApiService } from '../user-tab-api.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.page.html',
  styleUrls: ['./reset-password-modal.page.scss'],
})
export class ResetPasswordModalPage implements OnInit {
  public ionicForm: FormGroup;
  public isSubmitted = false;
  private reset_alert_text = {};
  public hide = false;
  public hide_repeat = false;
  public hide_repeat_valid = false;

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private dadosContaApi: DadosContaApiService,
    private modalCtr: ModalController,
    private router: Router
  ) {}

  public goBack() {
    this.modalCtr.dismiss();
  }

  async alert() {
    const alert = await this.alertController.create({
      header: '' + this.reset_alert_text['header'],
      message: '' + this.reset_alert_text['message'],
      buttons: ['' + this.reset_alert_text['buttons']],
    });

    await alert.present();
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      this.alert();
      return false;
    } else {
      const pass = this.ionicForm.get('pass').value;
      const pass_new = this.ionicForm.get('pass_repeat').value;
      const data = {
        pass: pass,
        new_pass: pass_new,
        token: localStorage.getItem('token'),
      };
      this.dadosContaApi.updatePassword(data);
    }
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      pass: ['', [Validators.required, Validators.minLength(8)]],
      new_pass: ['', [Validators.required, Validators.minLength(8)]],
      new_pass_valid: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
