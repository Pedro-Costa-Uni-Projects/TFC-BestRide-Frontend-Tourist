import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RecoverAccountApiService } from './recover-account-api.service';
import { AppComponent } from '../app.component';

import { CodeVerificationPage } from './code-verification/code-verification.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-conta',
  templateUrl: './recover-account.page.html',
  styleUrls: ['./recover-account.page.scss'],
})
export class RecoverAccountPage implements OnInit {
  ionicForm: FormGroup;
  language: string = this.translateService.currentLang;

  registrationForm = this.formBuilder.group({
    email: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private recuperarContaApi: RecoverAccountApiService,
    private model_controller: ModalController,
    private comp: AppComponent
  ) {
    comp.hide_tab = true;
  }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.model_controller.create({
      component: CodeVerificationPage,
    });
    return await modal.present();
  }

  public submit(): void {
    console.log(this.registrationForm.value);
    var email = this.registrationForm.get('email').value;
    this.recuperarContaApi.recoverAccount(email);
    this.presentModal();
  }
}
