import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;
//const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) {
   }

  getData(url): Observable<any> {
    return this.http.get(API_URL + url);
  }


}
