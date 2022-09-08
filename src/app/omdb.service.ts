import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OMDb } from './omdb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OmdbService {

  // API URI
  private _url: string = "https://www.omdbapi.com/?"
  constructor(private http: HttpClient) { }

  getOmdbDetails(pincode: any): any {

    console.log(this._url)
    return this.http.get<OMDb>(this._url + "s="+ pincode +"&apikey=879c7d9d");
  }

}
