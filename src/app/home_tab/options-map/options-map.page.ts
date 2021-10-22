import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RoadMap } from '../roadMap';

@Component({
  selector: 'app-options-map',
  templateUrl: './options-map.page.html',
  styleUrls: ['./options-map.page.scss'],
})
export class OptionsMapPage implements OnInit {
  public ionicForm: FormGroup;
  public trips: Array<RoadMap> = [];
  public locationOption: any;

  public registrationForm = this.formBuilder.group({
    location: ['', Validators.required],
  });

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onChange(selectedValue: any) {
    console.log('Selected:' + selectedValue);
  }

  submit(e) {
    if (e.target.value == undefined) {
      return;
    }
    const local = e.target.value;

    const dismiss_data = {
      local: local,
    };

    this.modalController.dismiss(dismiss_data);
  }
}
