import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NBA } from './models/nba.model';

@Injectable()
export class DataService {
  apiUrl = 'http://developers.stattleship.com';
  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<NBA[]>(this.apiUrl);
  }
}
