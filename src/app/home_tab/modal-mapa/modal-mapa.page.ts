import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError,
} from '@ionic-native/geolocation/ngx';
import { RoadMap } from '../roadMap';

declare var google: any;

@Component({
  selector: 'app-modal-mapa',
  templateUrl: './modal-mapa.page.html',
  styleUrls: ['./modal-mapa.page.scss'],
})
export class ModalMapaPage implements OnInit {
  private ZOOM_LEVEL: number = 16.5; // Zoom do mapa
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  private map: any;
  @Input() circuito_rec: RoadMap;
  private circuito: RoadMap;
  public language: string = this.translate.currentLang;
  constructor(
    private modalCtr: ModalController,
    private translate: TranslateService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.circuito = this.circuito;
    this.showMap();
  }

  async close() {
    const closeModal: string = 'Modal Closed';
    await this.modalCtr.dismiss(closeModal);
  }

  private showMap(): void {
    const location = new google.maps.LatLng(
      this.circuito.interestPoints[this.circuito.interestPoints.length - 3].lat,
      this.circuito.interestPoints[this.circuito.interestPoints.length - 3].lng
    );

    const options = {
      center: location,
      zoom: this.ZOOM_LEVEL,
      disableDefaultUI: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);

    //  ADICIONAR MARCADORES AO MAPA
    for (let pos of this.circuito.interestPoints) {
      let posMarker = new google.maps.LatLng(pos.lat, pos.lng);

      let marker = new google.maps.Marker({
        map: this.map,
        position: posMarker,
        title: this.circuito.title,
        latitude: pos.lat,
        longitude: pos.lng,
      });

      const roteiros_trace = new google.maps.Polyline({
        path: this.circuito.interestPoints,
        geodesic: true,
        strokeColor: 'red',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      roteiros_trace.setMap(this.map);

      let content = '<p> ' + pos.title + '</p>';
      let infoWindow = new google.maps.InfoWindow({
        content: content,
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
    }
  }
}
