import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ValidatorProvider} from "../../providers/validator/validator";
import {ValidatedPage} from "../validated/validated";
import {StreamItem} from "../../interfaces/streamItem";
import {QrScannerPage} from "../qr-scanner/qr-scanner";


@Component({
  selector: 'page-validate',
  templateUrl: 'validate.html',
})
export class ValidatePage {

  txid: any; //usuay.. it's a hex number... buy the output of the QR scanner qr scanner output is a string and the were no build in hex parser so far...

  node:string = "multichain.shokri.at"; //not in use yet
  chain:string = "cec-pc1"; //not in use yet

  constructor(public navCtrl: NavController, private validatorProvider: ValidatorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidatePage');
  }

  validate_manual_tx_id() {
    this.validatorProvider.validateTxId(this.txid).then(response => {
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

  openQrScanner() {
    console.log("try to open qr-scanner ");
    new Promise((resolve, reject) => {
      this.navCtrl.push(QrScannerPage, {resolve: resolve});
    }).then(input => {

      this.txid = input;
    });
  }

}
