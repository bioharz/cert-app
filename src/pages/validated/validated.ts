import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StreamItem} from "../../interfaces/streamItem";

@Component({
  selector: 'page-validated',
  templateUrl: 'validated.html',
})
export class ValidatedPage {

  streamItem: StreamItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidatedPage');
    this.streamItem = this.navParams.get('streamItem');
    console.log(this.streamItem);
  }



}
