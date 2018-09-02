import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CertificateType} from "../../interfaces/enums/certificateType";
import {CertificateStatus} from "../../interfaces/enums/certificateStatus";
import {CertificateGroup} from "../../interfaces/certificateGroup";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

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
      },
        {
          name: "Unternehmerprüfung",
          info: "",
          issuing_date: "29.08.2018",
          issuer: "",
          status: CertificateStatus.auditing
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

}
