import { Genre } from './genre.model';
import { Mode } from './mode.model';
import { Perspective } from './perspective.model';
import { Platform } from './platform.model';
import { Theme } from './theme.model';

export class SearchOptions {
  genres: Genre[];
  modes: Mode[];
  perspectives: Perspective[];
  platforms: Platform[];
  themes: Theme[];
}
