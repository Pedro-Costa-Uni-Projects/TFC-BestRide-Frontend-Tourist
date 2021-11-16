import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CustomTranslatePipe } from '../pipes/custom-translate.pipe';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  public currentLang: BehaviorSubject<string> = new BehaviorSubject<string>(
    'en'
  );

  constructor(
    private http: HttpClient,
    public alertController: AlertController
  ) {}

  public translateText(text: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/translate/`, {
      text,
      outputLang: this.currentLang.value,
      sourceLang: 'en',
    });
  }
}
