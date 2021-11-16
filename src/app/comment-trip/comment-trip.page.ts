import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CommentApiService } from './comment-trip-api.service';
import { Observable } from 'rxjs';
import { Comment, User } from './comment';
import { CustomTranslateService } from '../shared/services/custom-translate.service';

@Component({
  selector: 'app-comment-trip',
  templateUrl: './comment-trip.page.html',
  styleUrls: ['./comment-trip.page.scss'],
})
export class CommentTripPage implements OnInit {
  @Input() road_map_id: number;
  public ionicForm: FormGroup;
  public roadTitle: String;
  public comments: Array<any> = [];
  public progress: boolean = false;
  private form: FormGroup;
  public user: User;

  public registrationForm = this.formBuilder.group({
    rating: ['', Validators.compose([Validators.required])],
    comment: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(350)]),
    ],
  });

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private comments_api: CommentApiService,
    private trans: CustomTranslateService,
    private mdlCtrl: ModalController
  ) {}

  ngOnInit() {
    this.comments = this.comments_api.get_comments(this.road_map_id);
  }

  public closeModal() {
    this.mdlCtrl.dismiss();
    this.comments = []; // Empty array
  }

  public submit() {
    this.user = this.comments_api.getUser();
    let comment = new Comment(
      this.registrationForm.get('rating').value,
      this.registrationForm.get('comment').value,
      this.road_map_id,
      this.user.name
    );
    this.comments_api.postComment(comment);
  }

  public getRoadTitle(): String {
    return this.roadTitle;
  }
}
