import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { HomePageResponse } from '../models/homepageresponse.model';

@Injectable()
export class DataFactory {
  constructor(private http: HttpClient) { }

  

  GetHomePageData(): Observable<HomePageResponse> {
    return this.http.get<HomePageResponse>(apiUrl + "game/getallgames");
  };


}


const apiUrl = "api/";
