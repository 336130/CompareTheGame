import { VendorGameSetting } from './vendor-game-settings.model';

export class Vendor {
  vendorID: number;
  abbreviation: string;
  name: string;
  url: string;
  logoURL: string;
  font: string;
  elementType: string;
  elementValue: string;
  createdDate: Date;
  createdBy: string;
  modifiedDate: Date;
  modifiedBy: string;
  settings: VendorGameSetting[];
}
