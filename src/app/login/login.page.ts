import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, isPlatform, AlertController } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
//facebook login
import { HttpClient } from '@angular/common/http';
import { FacebookLoginPlugin } from '@capacitor-community/facebook-login';
import { FacebookLogin } from '@capacitor-community/facebook-login';
registerWebPlugin(FacebookLogin);

//google login
import '@codetrix-studio/capacitor-google-auth';

//api
import { LoginApiService } from './login-api.service';
import { CriaContaApiService } from '../create_account/create-account-api.service';
import { Environment } from '@ionic-native/google-maps';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public showPass = false;
  public passwordIconToggle = 'eye';
  public ionicForm: FormGroup;
  public name: string;
  public language: string = this.translateService.currentLang;

  //facebook
  private fbLogin: FacebookLoginPlugin;
  private user = null;
  private token = null;

  //google
  private userInfo = null;
  // Form Builder -> parametros
  private profileForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  public registrationForm = this.formBuilder.group({
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
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
  });

  private login_alert_text = {};

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private translateService: TranslateService,
    private alertCtrl: AlertController,
    private loginApi: LoginApiService,
    private storage: NativeStorage,
    private comp: AppComponent,
    private account_api: CriaContaApiService
  ) {
    this.setupFbLogin();
    comp.hide_tab = true;
    this.translateService.get('alert_login').subscribe((data) => {
      this.login_alert_text = {
        header: data['header'],
        message: data['message'],
        buttons: data['buttons'][0],
      };
    });
  }

  /********************Facebook Login*************************** */
  async setupFbLogin() {
    if (isPlatform('desktop')) {
      this.fbLogin = FacebookLogin;
    } else {
      // Use the native implementation inside a real app!
      const { FacebookLogin } = Plugins;
      this.fbLogin = FacebookLogin;
    }
  }

  async login() {
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
    const result = await this.fbLogin.login({
      permissions: FACEBOOK_PERMISSIONS,
    });

    if (result.accessToken && result.accessToken.userId) {
      this.token = result.accessToken;
      this.loadUserData();
      this.router.navigate(['/create-account']);
    } else if (result.accessToken && !result.accessToken.userId) {
      // Web only gets the token but not the user ID
      // Directly call get token to retrieve it now
      this.getCurrentToken();
      //this.router.navigate(['/cria-conta']);
    } else {
      // Login failed
    }
  }

  async getCurrentToken() {
    const result = await this.fbLogin.getCurrentAccessToken();

    if (result.accessToken) {
      this.token = result.accessToken;
      this.loadUserData();
      this.router.navigate(['/menu']);
    } else {
      // Not logged in.
    }
  }

  async loadUserData() {
    const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
    this.http.get(url).subscribe((res) => {
      this.user = res;
    });
  }

  async logout() {
    await this.fbLogin.logout();
    this.user = null;
    this.token = null;
  }

  //google login
  // "https://lh3.googleusercontent.com/a/AATXAJzbqwk2kkimyVlIHxZK59wgGl8Z2UxLMCZ9NDuH=s96-c"
  async googleSignup() {
    const googleUser = (await Plugins.GoogleAuth.signIn(null)) as any;
    this.userInfo = googleUser;
    let dados_criar = {
      dados_nome: this.userInfo['givenName'],
      dados_email: this.userInfo['email'],
      password: this.userInfo['givenName'],
    };

    this.account_api.criaContaGoogle(dados_criar);
  }

  ngOnInit() {}

  //esconde/mostra password
  togglePass(): void {
    this.showPass = !this.showPass;

    if (this.passwordIconToggle == 'eye') {
      this.passwordIconToggle = 'eye-off';
    } else {
      this.passwordIconToggle = 'eye';
    }
  }

  public submeter_login(): void {
    if (!this.registrationForm.valid) {
      this.showDialog();
    } else {
      let email = this.registrationForm.get('email').value;
      let password = this.registrationForm.get('password').value;
      this.loginApi.login_normal(email, password);
    }
  }

  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }

  //ir para a pagina - criar conta
  public navegar(): void {
    this.router.navigate(['/create_account']);
  }

  //ir para a pagina - criar conta
  public recuperarConta(): void {
    this.router.navigate(['/recover_account']);
  }

  async showDialog() {
    const alert = await this.alertCtrl.create({
      header: '' + this.login_alert_text['header'],
      message: '' + this.login_alert_text['message'],
      buttons: ['' + this.login_alert_text['buttons']],
    });
    alert.present();
  }
}
