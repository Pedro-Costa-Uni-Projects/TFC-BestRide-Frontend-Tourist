import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarioApiService {
  private url: String = '/api/employees';
  // localhost/api/employees

  constructor(private http: HttpClient) {}

  public getEmployees(): void {
    /* let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Upgrade-Insecure-Requests', '1');
    headers.append('withCredentials', 'true');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8100 73');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    headers.append(
      'Access-Control-Allow-Headers',
      'Content-Type,Authorization,Upgrade-Insecure-Requests'
    );*/

    this.http.get('http://localhost:8080/api/utilizadores/').subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {}
    );

    let postData = {
      nome: 'Rui',
      password: 'KLOsdg123+*',
      login_type: 0,
      userinfo_iduserinfo: 0,
    };

    this.http
      .post('http://localhost:8080/api/utilizadores/', postData)
      .subscribe(
        (data) => {},
        (error) => {
          console.log(error);
        }
      );
  }
}
