import { Genre } from './genre.model';
import { Mode } from './mode.model';
import { Theme } from './theme.model';
import { Perspective } from './perspective.model';
import { Screenshot } from './screenshot.model';
import { Platform } from './platform.model';

export class Game {
  gameID: number;
  gameName: string;
  URL: string;
  coverImageUrl: string;
  summary: string;
  firstReleaseDate: Date;
  gameGenres: Genre[];
  gameModes: Mode[];
  gameThemes: Theme[];;
  gamePerspectives: Perspective[];
  gameScreenshots: Screenshot[];
  gamePlatforms: Platform[];
}
