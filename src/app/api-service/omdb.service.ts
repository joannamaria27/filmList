import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OMDb, OmdbDetails } from './omdb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OmdbService {

  private _url: string = "https://www.omdbapi.com/?"
  constructor(private http: HttpClient) { }

  getOmdbDetails(code: any): any {
    console.log(this._url)
    return this.http.get<OMDb>(this._url + "s="+ code +"&apikey=879c7d9d");
  }

  getOmdbDetailsId(code: any): any {
    console.log(this._url)
    return this.http.get<OmdbDetails>(this._url + "i="+ code +"&apikey=879c7d9d");
  }

}
