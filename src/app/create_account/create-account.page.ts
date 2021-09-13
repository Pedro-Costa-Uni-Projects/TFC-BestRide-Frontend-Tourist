import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CriaContaApiService } from './create-account-api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cria-conta',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CriaContaPage implements OnInit {
  public showPass = false;
  public showPass2 = false;
  public language: string = this.translateService.currentLang;

  public passwordIconToggle: String = 'eye';
  public passwordIconToggle2: String = 'eye';
  public ionicForm: FormGroup;

  public profileForm = this.formBuilder.group({
    name: '',
    dob: '',
    cellphone: '',
    address: '',
    postal: '',
    gender: '',
    city: '',
    email: '',
    pass: '',
    passRepeat: '',
  });

  public registrationForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
      dob: ['', Validators.required],
      cellphone: ['', Validators.required],
      address: ['', Validators.required],
      postal: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.maxLength(70),
          Validators.pattern(
            '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
          ),
          Validators.required,
        ]),
      ],
      pass: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ]),
      ],
      passRepeat: ['', Validators.required],
    },
    { validator: this.matchingPasswords('pass', 'passRepeat') }
  );

  constructor(
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private translateService: TranslateService,
    private api: CriaContaApiService,
    private comp: AppComponent
  ) {
    comp.hide_tab = true;
  }

  ngOnInit() {}

  togglePass(): void {
    this.showPass = !this.showPass;

    if (this.passwordIconToggle == 'eye') {
      this.passwordIconToggle = 'eye-off';
    } else {
      this.passwordIconToggle = 'eye';
    }
  }

  togglePass2(): void {
    this.showPass2 = !this.showPass2;

    if (this.passwordIconToggle2 == 'eye') {
      this.passwordIconToggle2 = 'eye-off';
    } else {
      this.passwordIconToggle2 = 'eye';
    }
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true,
        };
      }
    };
  }

  public submit() {
    const create_account = {
      name: this.registrationForm.get('name').value,
      dob: this.registrationForm.get('dob').value,
      phone: this.registrationForm.get('cellphone').value,
      address: this.registrationForm.get('address').value,
      postal: this.registrationForm.get('postal').value,
      gender: this.registrationForm.get('gender').value,
      city: this.registrationForm.get('city').value,
      email: this.registrationForm.get('email').value,
      pass: this.registrationForm.get('pass').value,
      passRepeat: this.registrationForm.get('passRepeat').value,
    };

    this.api.criaConta(create_account);
  }
}
