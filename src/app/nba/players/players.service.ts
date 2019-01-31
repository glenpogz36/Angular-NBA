import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Functions } from '../../shared/functions';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlayersService {

    constructor(public http: HttpClient) { }

    getActivePlayers(season = "latest") {
        let requestUrl = environment.baseUrl + `/${season}/active_players.json`;
        const headers = new HttpHeaders();

        let params = new HttpParams();

        return this.http.get(requestUrl, { headers: headers, params: params }).map((res: any) => res);
    }

    getActivePlayersForSearch(season = "latest") {
        let requestUrl = environment.baseUrl + `/${season}/active_players.json`;
        const headers = new HttpHeaders();

        let params = new HttpParams();
        return this.http.get(requestUrl, { headers: headers, params: params }).map((res: any) => res);
    }

}