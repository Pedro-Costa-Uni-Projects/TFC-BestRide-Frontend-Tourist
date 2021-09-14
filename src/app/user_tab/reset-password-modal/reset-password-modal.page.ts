import { Component, ContentChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonInput } from '@ionic/angular';
import { DadosContaApiService } from '../user-tab-api.service';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private dadosContaApi: DadosContaApiService,
    private modalCtr: ModalController,
    public translate: TranslateService,
    private router: Router
  ) {
    this.translate.get('reset_page_modal').subscribe((data) => {
      this.reset_alert_text = {
        header: data['header'],
        message: data['message'],
        buttons: data['buttons'][0],
      };
    });
  }

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

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  public hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  passwordTyperepeat: string = 'password';
  passwordIconRepeat: string = 'eye-off';

  public hideShowPasswordRepeat() {
    this.passwordTyperepeat =
      this.passwordTyperepeat === 'text' ? 'password' : 'text';
    this.passwordIconRepeat =
      this.passwordIconRepeat === 'eye-off' ? 'eye' : 'eye-off';
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
      pass_repeat: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
