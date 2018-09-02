import {Certificate} from "./certificate";
import {CertificateType} from "./enums/certificateType";

export interface CertificateGroup {
  type: CertificateType
  certificates: Certificate[]
}
