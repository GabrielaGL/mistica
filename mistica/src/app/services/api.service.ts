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
  tokenA: string = environment.oauth2Token;
  client: string = environment.clientId;

  private queryParameters: querypI[] = [];

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    let url = this.url;
    const headers = new HttpHeaders({
      'client_credentials&client_id': this.tokenA,
      'client_secret': this.client
    })

    return this.http.post(url, { headers });
  }

  getBirthChart(token:string, queryParameters:any): Observable<any> {
    let url = this.url + 'v2/astrology/birth-details';

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
