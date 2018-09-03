import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  settings = {
    info_service: true,
    push_service: false,
    sw_mode: false,
    dark_mode: false,
    touch_id: false,
  };

  constructor(public navCtrl: NavController) {

  }

}
