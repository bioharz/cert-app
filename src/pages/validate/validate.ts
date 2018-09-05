import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ValidatorProvider} from "../../providers/validator/validator";
import {ValidatedPage} from "../validated/validated";
import {StreamItem} from "../../interfaces/streamItem";


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
      //console.log(response);
      if (this.isStreamItem(response)) {
        let streamItem: StreamItem = response;
        this.push_validated_page(streamItem);
      } else {
        console.error("is non a valid stream item")
      }
    }, reason => {
      console.error(reason)
    });
  }

  push_validated_page(streamItem: StreamItem) {
    this.navCtrl.push(ValidatedPage, {streamItem});
  }

  isStreamItem(object: any): object is StreamItem {
    return true;
  }

}
