import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { HomePageResponse } from '../models/home-page-response.model';
import { Game } from '../models/game.model';
import { SearchOptions } from '../models/search-options.mmodel';

@Injectable()
export class DataFactory {
  constructor(private http: HttpClient) { }

  GetHomePageData(): Observable<HomePageResponse> {
    return this.http.get<HomePageResponse>(apiUrl + "game/getallgames");
  };

  GetSearchOptions(): Observable<SearchOptions> {
    return this.http.get<SearchOptions>(apiUrl + "game/getsearchoptions");
  }

  FetchGame(gameID: string): Observable<Game> {
    return this.http.get<Game>(apiUrl + "game/getgame", { params: { gameID: gameID } })
  }

  SearchForGame(gameName: string): Observable<Game[]> {
    return this.http.get<Game[]>(apiUrl + "game/searchforgame", { params: { gameName: gameName } });;
  }
}


const apiUrl = "api/";
