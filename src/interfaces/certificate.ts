import {CertificateStatus} from "./enums/certificateStatus";

export interface Certificate {
  name: string
  info: string,
  issuing_date: string, //quick and dirty. Change to Date!
  issuer: string,
  status: CertificateStatus
}
