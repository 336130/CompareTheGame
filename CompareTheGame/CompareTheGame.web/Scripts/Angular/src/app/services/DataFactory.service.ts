import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { HomePageResponse } from '../models/homepageresponse.model';
import { Game } from '../models/game.model';

@Injectable()
export class DataFactory {
  constructor(private http: HttpClient) { }

  

  GetHomePageData(): Observable<HomePageResponse> {
    return this.http.get<HomePageResponse>(apiUrl + "game/getallgames");
  };

  FetchGame(gameID: string): Observable<Game> {
    return this.http.get<Game>(apiUrl + "game/getgame", { params: { gameID: gameID } })
  }
}


const apiUrl = "api/";
