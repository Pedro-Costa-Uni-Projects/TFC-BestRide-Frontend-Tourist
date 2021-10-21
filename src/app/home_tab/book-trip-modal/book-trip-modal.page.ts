import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError,
} from '@ionic-native/geolocation/ngx';
import { InterestPoints, RoadMap } from '../roadMap';
import { MapServiceService } from '../map-service.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookServiceService } from './book-service.service';
declare var google: any;

@Component({
  selector: 'app-modal-mapa',
  templateUrl: './book-trip-modal.page.html',
  styleUrls: ['./book-trip-modal.page.scss'],
})
export class BookTripModalPage implements OnInit {
  private ZOOM_LEVEL: number = 16.5; // Zoom do mapa
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  private map: any;
  @Input() circuito_rec: InterestPoints;
  public circuito: any;
  public language: string = this.translate.currentLang;

  private interest: any;
  public vehicles: Observable<any>;
  public ionicForm: FormGroup;
  public progress: boolean = false;

  constructor(
    private modalCtr: ModalController,
    private translate: TranslateService,
    private map_service: MapServiceService,
    private booking_service: BookServiceService,
    private http: HttpClient,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      dateInitial: ['', Validators.required],
      people: ['', Validators.required],
      book_hour: ['', Validators.required],
      vehicle: ['', Validators.required],
    });

    this.circuito = this.circuito;
    this.vehicles = this.map_service.get_vehicles_road(this.circuito['id']);
    setTimeout(() => {
      this.progress = true;
      this.vehicles.forEach((element) => {});
    }, 2000);
  }

  ionViewDidEnter() {}

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dateInitial').setValue(date, {
      onlyself: true,
    });
  }

  public book_hour: string;

  public booking() {
    this.ionicForm.get('book_hour').setValue(this.book_hour.substring(11, 16), {
      onlyself: true,
    });
    console.log(this.circuito);
    const turist_id = localStorage.getItem('userID');
    const dateInitial = this.ionicForm.get('dateInitial').value;
    const book_hour = this.ionicForm.get('book_hour').value;
    console.log(turist_id);
    console.log(dateInitial);
    console.log(book_hour);

    const data_booking = {
      Pagamento_idPagamento: 1,
      dataViagem: dateInitial,
      turist: turist_id,
      trip_date: dateInitial,
      trip_time: book_hour,
      road_map: this.circuito.id,
      driver: 1,
    };
    const response = this.booking_service.booking_trip(data_booking);
  }
  async close() {
    const closeModal: string = 'Modal Closed';
    await this.modalCtr.dismiss(closeModal);
  }
}
