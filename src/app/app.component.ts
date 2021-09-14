import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CustomTranslateService } from './shared/services/custom-translate.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public language: string = this.translate.currentLang;
  private user_email: String;
  public hide_tab: boolean = false;

  constructor(
    private translate: TranslateService,
    private customTranslateService: CustomTranslateService,
    private router: Router,
    private nativeStorage: NativeStorage,
    private http: HttpClient
  ) {
    this.init();
  }

  private init(): void {
    if ('lang' in localStorage) {
      this.translate.setDefaultLang(localStorage.getItem('lang'));
      this.customTranslateService.currentLang.next(
        localStorage.getItem('lang')
      );
    } else {
      this.translate.setDefaultLang('en');
      this.customTranslateService.currentLang.next('en');
    }
  }
}
