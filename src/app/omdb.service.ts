import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OMDb } from './omdb';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  // API URI
  private _url: string = "http://www.omdbapi.com/?apikey=879c7d9d&"
  constructor(private http: HttpClient) { }

  getPostOfficeDetails(pincode: any): any {
    return this.http.get<OMDb>(this._url + "s="+ pincode);
  }
}
