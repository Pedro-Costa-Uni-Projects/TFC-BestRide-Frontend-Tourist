import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CodeVerificationApiService {
  private url: String = '/utilizadores/';
  private url_recuperar: String = '/recuperarConta/verificar';

  constructor(private http: HttpClient, private router: Router, public alertController: AlertController) {}

  public codeVerification( code: String,) : void {
    let postData = {
      code: code,
    };

    this.http.post(environment.apiUrl + this.url_recuperar, postData).subscribe(
        (data) => {
          console.log(data);
        },
        (erro) => {
          console.log(erro);
          this.showAlert();
        }
      );
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Código errado',
      message: 'Introduza Novamente',
      buttons: ['Tentar de Novo'],
    });

    await alert.present();
  }

  public atualizaPassword(pass: string)  : void{
    var id = localStorage.getItem('id');
    var data = {
      nome: 'teste',
      password: pass,
    };
    this.http
      .put(environment.apiUrl + this.url + id + '/', data)
      .subscribe((resposta) => {
        console.log(resposta);
      });

      
    this.router.navigate(['/login']);
  }
}