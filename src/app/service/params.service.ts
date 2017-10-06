import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
@Injectable() export class ParamsService {
  constructor(private http: HttpClient) {
  }

  sampleParams() {
    const params = new HttpParams()
      .set('login', 'georgesdaniel');
    this.http.get(`https://api.github.com/users/georgesdaniel?access_token=2458f569261e07c38f0fa9a6f2dd041d3ce62d72 `, {params})
      .subscribe(() => {
      });

  }
}
