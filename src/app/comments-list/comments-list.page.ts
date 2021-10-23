import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RoadMap } from '../home_tab/roadMap';
import { CommentsListService } from './comments-list-service.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.page.html',
  styleUrls: ['./comments-list.page.scss'],
})
export class CommentsListPage implements OnInit {
  @Input() road_map_id: number;
  @Input() road_map_name: string;
  @Input() road_map_image: string;
  public comments_list: Array<any> = [];
  public avg: number;

  constructor(
    private modalCtrl: ModalController,
    private comments_api: CommentsListService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadingCtrl
      .create({
        duration: 1500,
      })
      .then((response) => {
        response.present();
        console.log('loading.....');
        this.comments_list = this.comments_api.get_comments(this.road_map_id);
        this.comments_api
          .getAverageComments(this.road_map_id)
          .subscribe((res) => {
            this.avg = res;
          });
        response.onDidDismiss().then((response) => {});
      });
  }

  public closeModal() {
    this.modalCtrl.dismiss();
    this.comments_list = []; // Empty array
  }
}
