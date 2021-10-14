import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { LatLngBounds, MarkerOptions } from '@ionic-native/google-maps';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { RoadMap } from './roadMap';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError,
} from '@ionic-native/geolocation/ngx';

import { OptionsMapPage } from './options-map/options-map.page';
import { BookTripModalPage } from './book-trip-modal/book-trip-modal.page';
import { ModalController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { MapServiceService } from './map-service.service';
import { AlertController } from '@ionic/angular';
import { CustomTranslateService } from '../shared/services/custom-translate.service';
import { User } from './user';
import { TripDetailsPage } from './trip-details/trip-details.page';
import { CommentTripPage } from '../comment-trip/comment-trip.page';

declare var google: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;

  public selected: RoadMap;
  public language: string = this.translateService.currentLang;
  private distance: any;
  private currentPos: Geoposition;
  user: User;
  public contentLoad = false;
  public trips: Array<RoadMap> = [];
  public place: string;
  public searchedItem: any;

  constructor(
    private geolocation: Geolocation,
    private translateService: TranslateService,
    private router: Router,
    private model_controller: ModalController,
    private appComp: AppComponent,
    private map_service: MapServiceService,
    private trans: CustomTranslateService,
    public modalController: ModalController
  ) {
    appComp.hide_tab = false;
    map_service.ngOnInit();
  }

  ionViewWillEnter() {}

  ngOnInit() {
    this.presentModalMapDefinitions();
  }

  ngAfterViewInit() {}

  async presentModalMapDefinitions() {
    const modal = await this.modalController.create({
      component: OptionsMapPage,
    });

    modal.onDidDismiss().then((data) => {
      // Using Skeleton Text
      setTimeout(() => {
        this.place = data['data'].local;
        if (this.place == 'Near') {
          this.map_service.get_roads_near_me().subscribe((data) => {
            for (let pos in data) {
              this.trips.push(
                new RoadMap(
                  data[pos].id,
                  data[pos].title,
                  data[pos].duration,
                  data[pos].price,
                  data[pos].description,
                  data[pos].image,
                  data[pos].location['coordinates'][0],
                  data[pos].location['coordinates'][1]
                )
              );
            }
          });
        } else {
          this.map_service.get_roads_by_city(this.place).subscribe((data) => {
            for (let pos in data) {
              this.trips.push(
                new RoadMap(
                  data[pos].id,
                  data[pos].title,
                  data[pos].duration,
                  data[pos].price,
                  data[pos].description,
                  data[pos].image,
                  data[pos].location['coordinates'][0],
                  data[pos].location['coordinates'][1]
                )
              );
            }
          });
        }
        this.contentLoad = true;
      }, 3000);
      this.searchedItem = this.trips;
    });

    modal.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.trips = [];
    setTimeout(() => {
      console.log('Async operation has ended');
      if (this.place == 'Near') {
        this.map_service.get_roads_near_me().subscribe((data) => {
          for (let pos in data) {
            this.trips.push(
              new RoadMap(
                data[pos].id,
                data[pos].title,
                data[pos].duration,
                data[pos].price,
                data[pos].description,
                data[pos].image,
                data[pos].location['coordinates'][0],
                data[pos].location['coordinates'][1]
              )
            );
          }
        });
      } else {
        this.map_service.get_roads_by_city(this.place).subscribe((data) => {
          for (let pos in data) {
            this.trips.push(
              new RoadMap(
                data[pos].id,
                data[pos].title,
                data[pos].duration,
                data[pos].price,
                data[pos].description,
                data[pos].image,
                data[pos].location['coordinates'][0],
                data[pos].location['coordinates'][1]
              )
            );
          }
        });
      }
      event.target.complete();
    }, 2000);
  }

  public showRoteiro(road: RoadMap): void {
    this.selected = road;
    this.presentModal(road);
  }

  //  Open the page for the trip booking
  async presentModal(road: RoadMap) {
    const modal = await this.model_controller.create({
      component: BookTripModalPage,
      componentProps: {
        circuito: road,
      },
    });
    return await modal.present();
  }

  //  Open the page for the trip booking
  async trip_map_details(road: RoadMap) {
    const modal = await this.model_controller.create({
      component: TripDetailsPage,
      componentProps: {
        circuito: road,
      },
    });
    return await modal.present();
  }

  public async comments(road: RoadMap) {
    //localStorage.setItem('roadMapID', JSON.stringify(road.id));
    //his.router.navigate(['/comment-trip']);

    const modal = await this.model_controller.create({
      component: CommentTripPage,
      componentProps: {
        road_map_id: JSON.stringify(road.id),
      },
    });
    return await modal.present();
  }

  public ionChange(event) {
    const val = event.target.value;

    this.searchedItem = this.trips;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
}
