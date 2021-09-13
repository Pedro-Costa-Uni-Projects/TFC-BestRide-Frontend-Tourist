import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DadosContaApiService } from './user-tab-api.service';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ResetPasswordModalPage } from './reset-password-modal/reset-password-modal.page';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './user-tab.page.html',
  styleUrls: ['./user-tab.page.scss'],
})
export class DadosContaPage implements OnInit {
  public showPass = false;
  public passwordIconToggle = 'eye';

  public name: string;
  public email: string;
  public city: string;
  public phone: string;
  public address: string;
  public postal: string;

  public control_input: boolean = true;
  public icon_input: string = 'create-outline';

  public language: string = this.translateService.currentLang;
  valor: boolean;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private dadosContaApi: DadosContaApiService,
    public alertController: AlertController,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.valor = !this.valor;
  }

  ionViewDidEnter() {
    this.name = this.dadosContaApi.name;
    this.city = this.dadosContaApi.city;
    this.email = this.dadosContaApi.email;
    this.phone = this.dadosContaApi.phone;
    this.address = this.dadosContaApi.address;
    this.postal = this.dadosContaApi.postal;
  }

  public changeInputStatus(): void {
    this.control_input = !this.control_input;
    if (this.icon_input == 'create-outline') {
      this.icon_input = 'close-outline';
    } else {
      this.icon_input = 'create-outline';
    }
  }

  public function(): void {
    alert('oals');
  }

  public alterarPass(): void {
    this.presentModal();
  }

  public alterarCampos(): void {
    let dados_conta_dict = {
      name: this.name,
      city: this.city,
      email: this.email,
      phone: this.phone,
      address: this.address,
      postal: this.postal,
    };
    this.dadosContaApi.atualizaCampos(dados_conta_dict);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResetPasswordModalPage,
      cssClass: 'reset-password-modal.page.scss',
    });
    return await modal.present();
  }

  private togglePass(): void {
    this.showPass = !this.showPass;

    if (this.passwordIconToggle == 'eye') {
      this.passwordIconToggle = 'eye-off';
    } else {
      this.passwordIconToggle = 'eye';
    }
  }

  public eliminarConta() : void {
    this.dadosContaApi.eliminaContaUserInfo();
    this.dadosContaApi.eliminaContaUser();
    this.router.navigate(['/login']);
    localStorage.removeItem('id')
  }
}
