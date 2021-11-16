import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tour } from './tour';

@Injectable({
  providedIn: 'root',
})
export class TourApiService {
  private url_fetch_bookings = '/travels/';

  private tours: Array<Tour> = [];

  constructor(private http: HttpClient) {}

  public getTravelsByUser(userID: string): Array<Tour> {
    this.http.get(environment.apiUrl + this.url_fetch_bookings + 4).subscribe(
      (response) => {
        for (let i in response) {
          this.tours.push({
            road_id: response[i]['road_map_id'].id,
            road_map_name: response[i]['road_map_id'].title,
            duration: response[i]['road_map_id'].duration,
            price: response[i]['road_map_id'].price,
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
    return this.tours;
  }
}
