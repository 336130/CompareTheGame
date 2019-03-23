import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { HomePageResponse } from '../models/home-page-response.model';
import { Game } from '../models/game.model';
import { SearchOptions } from '../models/search-options.mmodel';
import { Vendor } from '../models/vendor.model';

@Injectable()
export class DataFactory {
  constructor(private http: HttpClient) { }

  GetHomePageData(): Observable<HomePageResponse> {
    return this.http.get<HomePageResponse>(apiUrl + "game/getHomepageData");
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

  //ADMIN PAGE
  GetVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(apiUrl + "admin/getvendors");;
  }

  GetAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(apiUrl + "admin/getallgames");
  }

  EditVendor(vendor: Vendor): Observable<any> {
    return this.http.post(apiUrl + "admin/savevendor", vendor);
  }

  DeleteVendor(vendor: Vendor): Observable<any> {
    return this.http.post(apiUrl + "admin/deletevendor", vendor);
  }
}


const apiUrl = "api/";
