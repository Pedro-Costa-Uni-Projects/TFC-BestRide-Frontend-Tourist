import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CodeVerificationApiService } from './code-verification-api.service';
import { ResetPasswordModalPage } from './reset-password-modal/reset-password-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-introduzir-codigo',
  templateUrl: './code-verification.page.html',
  styleUrls: ['./code-verification.page.scss'],
})
export class CodeVerificationPage implements OnInit {
  ionicForm: FormGroup;
  language: string = this.translateService.currentLang;

  registrationForm = this.formBuilder.group({
    code: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private codeVerificationApi: CodeVerificationApiService,
    private model_controller: ModalController
  ) {}

  ngOnInit() {}

  public submit()  : void {
    var code = this.registrationForm.get('code').value;
    this.codeVerificationApi.codeVerification(code)
    this.presentModal();
    this.close();
  }

  //funcao para abri o model para abrir modal
  async presentModal() {
    const modal = await this.model_controller.create({
      component: ResetPasswordModalPage,
    });
    return await modal.present();
  }

  async close() {
    const closeModal: string = 'Modal Closed';
    await this.model_controller.dismiss(closeModal);
  }
}
