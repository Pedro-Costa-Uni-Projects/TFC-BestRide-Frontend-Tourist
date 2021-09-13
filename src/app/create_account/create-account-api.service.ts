import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CriaContaApiService {
  private url: String = '/users/';
  private url_info: String = '/userInfo/';
  private url_add_turist: String = '/userInfo/add_to_turist_role';

  constructor(private http: HttpClient, private router: Router) {}

  public criaConta(data_dict): void {
    let postData = {
      password: data_dict['pass'],
      login_type: '0',
    };

    this.http.post(environment.apiUrl + this.url, postData).subscribe(
      (data) => {
        let id_user = data['iduser'];

        let postRoles = {
          user_iduser: id_user,
          roles_id_roles: 0,
        };
        //guarda em user_roles
        this.http
          .post(environment.apiUrl + this.url_add_turist, postRoles)
          .subscribe(
            (data) => {},
            (error) => {}
          );
        let postDataInfo = {
          user_iduser: id_user,
          email: data_dict['email'],
          name: data_dict['name'],
          dob: data_dict['dob'],
          city: data_dict['vity'],
          gender: data_dict['gender'],
          phone_number: data_dict['phone'],
          adress: data_dict['address'],
          postal_code: data_dict['postal'],
        };
        //guardar em userInfo
        this.http
          .post(environment.apiUrl + this.url_info, postDataInfo)
          .subscribe(
            (data) => {
              this.router.navigate(['/login']);
            },
            (error) => {}
          );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public criaContaGoogle(dados_dict: any): void {
    let postData = {
      password: dados_dict['password'],
      login_type: '1',
    };

    console.log(dados_dict);
    this.http.post(environment.apiUrl + this.url, postData).subscribe(
      (data) => {
        console.log(data['iduser']);

        let id_user = data['iduser'];

        let postRoles = {
          user_iduser: id_user,
          roles_id_roles: 0,
        };
        //guarda em user_roles
        this.http
          .post(environment.apiUrl + this.url_add_turist, postRoles)
          .subscribe(
            (data) => {
              console.log(data);
            },
            (error) => {
              console.log(error);
            }
          );

        let postDataInfo = {
          user_iduser: id_user,
          email: dados_dict['dados_email'],
          name: dados_dict['dados_nome'],
          dob: null,
          city: null,
          gender: null,
          phone_number: null,
          adress: null,
          postal_code: null,
        };
        //guardar em userInfo
        this.http
          .post(environment.apiUrl + this.url_info, postDataInfo)
          .subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['/home_tab']);
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
