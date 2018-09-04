import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ValidatorProvider} from "../../providers/validator/validator";


@Component({
  selector: 'page-validate',
  templateUrl: 'validate.html',
})
export class ValidatePage {

  manual_tx_id: string;

  constructor(public navCtrl: NavController, private validatorProvider: ValidatorProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidatePage');
  }

  validate_manual_tx_id() {
    this.validatorProvider.validateTxId(this.manual_tx_id).then(response => {
      console.log(response)
    }, reason => {
      console.error(reason)
    });
  }

}
