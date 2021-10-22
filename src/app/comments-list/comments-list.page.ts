import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  constructor(
    private modalCtrl: ModalController,
    private comments_api: CommentsListService
  ) {}

  ngOnInit() {
    this.comments_list = this.comments_api.get_comments(this.road_map_id);
  }

  public closeModal() {
    this.modalCtrl.dismiss();
    this.comments_list = []; // Empty array
  }
}
