import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { querypI } from '../model/queryparameters.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = environment.apiUrl;
  token: string = environment.oauth2Token;
  client: string = environment.clientId;

  private queryParameters: querypI[] = [];

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    let url = this.url + '/token';
    const tokens = ({
      'client_id': this.client,
      'client_secret': this.token
    })
    
    return this.http.post(url, tokens);
  }

  getBirthChart(token:string, queryParameters:any): Observable<any> {
    let url = '/v2/astrology/birth-details';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ token }`,
    });

    let params = new HttpParams();
    for (const key in queryParameters) {
      if (queryParameters.hasOwnProperty(key)) {
        params = params.append(key, queryParameters[key]);
      }
    }
    return this.http.get(url, { headers, params });
  }
}
