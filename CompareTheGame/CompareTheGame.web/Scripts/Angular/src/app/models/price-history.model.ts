import { Platform } from './platform.model';
import { Vendor } from './vendor.model';

export class PriceHistory {
  platform: Platform;
  vendor: Vendor;
  price: string;
  salePrice: string;
  createdDate: Date;
  pageURL: string;
}
