import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CertificateType} from "../../interfaces/enums/certificateType";
import {CertificateStatus} from "../../interfaces/enums/certificateStatus";
import {CertificateGroup} from "../../interfaces/certificateGroup";
import {CertificatePage} from "../certificate/certificate";
import {Certificate} from "../../interfaces/certificate";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  certificateGroups: CertificateGroup[] = [
    {
      type: CertificateType.training,
      certificates: [{
        name: "Meisterprüfung",
        info: "Tischler",
        issuing_date: "29.08.2016",
        issuer: "WKO Österreich",
        status: CertificateStatus.valid
      },
        {
          name: "Gesellenprüfung",
          info: "Tischler",
          issuing_date: "04.04.2011",
          issuer: "WKO Österreich",
          status: CertificateStatus.valid
        }]
    },
    {
      type: CertificateType.futher_education,
      certificates: [{
        name: "Spanisch B1 - Teil I",
        info: "",
        issuing_date: "26.07.2013",
        issuer: "WIFI Österreich",
        status: CertificateStatus.valid
      }]
    },
    {
      type: CertificateType.authorization,
      certificates: [{
        name: "Stahlschweißer/in",
        info: "",
        issuing_date: "EN ISO 9606-1",
        issuer: "WIFI Österreich",
        status: CertificateStatus.valid
      }]
    },
    {
      type: CertificateType.validating,
      certificates: [{
        name: "Unternehmerprüfung",
        info: "",
        issuing_date: "29.08.2018",
        issuer: "",
        status: CertificateStatus.auditing
      }]
    }
  ];


  constructor(public navCtrl: NavController) {

  }

  certificateExample(certificate: Certificate){

    //QUICK AND DIRTY
    if(certificate.name == "Stahlschweißer/in") {
    this.navCtrl.push(CertificatePage);
    } else {
      console.log("Stahlschweißer/in")
    }
  }

}
