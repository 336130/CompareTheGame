import { Genre } from './genre.model';
import { Mode } from './mode.model';
import { Theme } from './theme.model';
import { Perspective } from './perspective.model';
import { Screenshot } from './screenshot.model';
import { Platform } from './platform.model';
import { PriceHistory } from './price-history.model';
import { VendorGameSetting } from './vendor-game-settings.model';

export class Game {
  gameID: number;
  gameName: string;
  URL: string;
  coverImageURL: string;
  summary: string;
  firstReleaseDate: Date;
  genres: Genre[];
  modes: Mode[];
  themes: Theme[];;
  perspectives: Perspective[];
  screenshots: Screenshot[];
  platforms: Platform[];
  priceHistory: PriceHistory[];
  todaysPrices: PriceHistory[];
  cheapest: PriceHistory[];
  settings: VendorGameSetting[];
  cheapestPrice: string;
  published: boolean;
}
