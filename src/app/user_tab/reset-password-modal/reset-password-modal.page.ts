import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DadosContaApiService } from '../user-tab-api.service';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.page.html',
  styleUrls: ['./reset-password-modal.page.scss'],
})
export class ResetPasswordModalPage implements OnInit {
  public ionicForm: FormGroup;
  public isSubmitted = false;
  private reset_alert_text = {};

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private dadosContaApi: DadosContaApiService,
    private modalCtr: ModalController,
    public translate: TranslateService
  ) {
    this.translate.get('reset_page_modal').subscribe((data) => {
      this.reset_alert_text = {
        header: data['header'],
        message: data['message'],
        buttons: data['buttons'][0],
      };
    });
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
      if (pass != pass_new) {
        this.alert();
      } else {
        //atualiza password
        this.dadosContaApi.atualizaPassword(pass_new);
        this.modalCtr.dismiss();
      }
    }
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      pass: ['', [Validators.required, Validators.minLength(6)]],
      pass_repeat: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
