import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

import { ModalMapaPage } from './modal-mapa/modal-mapa.page';
import { ModalController } from '@ionic/angular';
import { AppComponent } from '../app.component';

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
  private currentPos: Geoposition;
  public trips: Array<RoadMap> = [
    {
      title: 'Historical Tour',
      duration: ' 3 h',
      price: 6,
      description:
        'Visit the hills of the typical neighborhoods of Alfama, Graça and Mouraria by tuc tuc. Feel the true heart of Lisbon' +
        's roots. Whose ancient traditions persist, the Castle of São Jorge, the Cathedral, the popular saints and the fate of Fado…',
      interestPoints: [
        {
          title: 'SÉ', // inicio da  viagem
          lat: 38.7098786,
          lng: -9.132584400000042,
        },
        {
          title: 'MIRADOURO PORTAS DO SOL',
          lat: 38.711148,
          lng: -9.133262000000059,
        },
        { title: 'ALFAMA', lat: 38.7125, lng: -9.132799999999975 },
        {
          title: 'VILA DO BAIRRO DO CASTELO',
          lat: 38.7131963,
          lng: -9.133408799999984,
        },
        {
          title: 'MIRADOURO DA GRAÇA',
          lat: 38.716272,
          lng: -9.131524000000013,
        },
        {
          title: 'GRAÇA',
          lat: 38.71794939999999,
          lng: -9.13039619999995,
        },
        {
          title: 'MIRADOURO NOSSA SENHORA DO MONTE',
          lat: 38.71906409127469,
          lng: -9.132594176721227,
        },
      ],
    },
    {
      title: 'Old City Tour',
      duration: ' 1 h',
      price: 2,
      description:
        'Visit by Tuk Tuk, O Chiado, Bairro Alto and Príncipe Real. Lisbon' +
        's cosmopolitan charm, bohemian being one of the most prestigious places in Lisbon.' +
        'It has always been linked to a strong intellectual, liberal, modernist and also romantic component.',
      interestPoints: [
        {
          title: 'MIRADOURO DE S. PEDRO DE ALCÂNTARA',
          lat: 38.7150612,
          lng: -9.144405199999937,
        },
        {
          title: 'BAIRRO ALTO',
          lat: 38.7127532,
          lng: -9.146295099999975,
        },
        {
          title: 'CHIADO',
          lat: 38.710202,
          lng: -9.14223800000002,
        },
        {
          title: 'SÉ',
          lat: 38.7098786,
          lng: -9.132584400000042,
        },
        {
          title: 'ALFAMA',
          lat: 38.7125,
          lng: -9.132799999999975,
        },
        {
          title: 'VILA DO BAIRRO DO CASTELO',
          lat: 38.7131963,
          lng: -9.133408799999984,
        },
      ],
    },
  ];

  constructor(
    private geolocation: Geolocation,
    private translateService: TranslateService,
    private router: Router,
    private model_controller: ModalController,
    private appComp: AppComponent
  ) {
    appComp.hide_tab = false;
    //this.translateService.use(this.language);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  ionViewDidEnter() {}

  /* Para futuro Sprint
  getUserPosition() {
    this.options = {
      enableHighAccuracy: false,
    };
    this.geolocation.getCurrentPosition(this.options).then(
      (pos: Geoposition) => {
        this.currentPos = pos;

        let latLng = new google.maps.LatLng(
          this.currentPos.coords.latitude,
          this.currentPos.coords.longitude
        );

        let marker = new google.maps.Marker({
          map: this.map,
          position: latLng,
          latitude: this.currentPos.coords.latitude,
          icon: { url: './assets/icon/gps.png' },
          longitude: this.currentPos.coords.longitude,
        });
      },
      (err: PositionError) => {
        console.log('ERRO::: : ' + err.message);
      }
    );
  }*/

  public showRoteiro(road: RoadMap): void {
    this.selected = road;
    this.presentModal(road);
  }

  //funcao para abri o model para visualizar o mapa
  async presentModal(road: RoadMap) {
    const modal = await this.model_controller.create({
      component: ModalMapaPage,
      cssClass: './modal-mapa/modal-mapa.scss',
      componentProps: {
        circuito: road,
      },
    });
    return await modal.present();
  }
}
