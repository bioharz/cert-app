import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StreamItem} from "../../interfaces/streamItem";

/*
  Generated class for the ValidatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidatorProvider {

  //example txid = 91dd220b0c6111c355826f870d51a87c8e0ea9a359f6bc7af25ee0a8f51b7fce
  mcApi: string = "https://multichain.shokri.at/";
  mcStreamName: string = "cec-pc1";

  constructor(public http: HttpClient) {
  }

  validateTxId(txId: string) {
    return new Promise(resolve => {
      this.http.get<StreamItem>(this.mcApi + 'getstreamitem/' + this.mcStreamName + '/' + txId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
