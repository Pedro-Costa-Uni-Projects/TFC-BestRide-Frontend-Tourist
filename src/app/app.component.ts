import { Component } from '@angular/core';
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
  private user_email: String;
  public hide_tab: boolean = false;

  constructor(
    private customTranslateService: CustomTranslateService,
    private router: Router,
    private nativeStorage: NativeStorage,
    private http: HttpClient
  ) {
    this.init();
  }

  private init(): void {
    if ('lang' in localStorage) {
      this.customTranslateService.currentLang.next(
        localStorage.getItem('lang')
      );
    } else {
      this.customTranslateService.currentLang.next('en');
    }
  }
}
