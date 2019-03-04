import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()
export class DataFactory {
  constructor(private http: HttpClient) { }

  

  GetRecentlyAdded(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + "game/getallgames");
  };


}


const apiUrl = "api/";
