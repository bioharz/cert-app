import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

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
