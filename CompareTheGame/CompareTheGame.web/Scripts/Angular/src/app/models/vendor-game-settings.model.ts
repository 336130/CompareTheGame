import { Platform } from './platform.model';

export class VendorGameSetting {
  automated: boolean;
  createdBy: string;
  createdDate: Date;
  elementType: string;
  elementValue: string;
  gamePlatformID: number;
  modifiedBy: string;
  modifiedDate: Date;
  pageURL: string;
  vendorGameSettingID: number;
  vendorID: number;
  platform: Platform;
}
