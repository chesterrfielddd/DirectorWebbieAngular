import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPortfolioApiItem } from '../models/portfolio-api-item.interface';
import { ApiServerUrl } from '../constants/api-server-url.constant';

@Injectable({
  providedIn: 'root'
})
export class PortfolioApiService {
  readonly apiUrl = ApiServerUrl;

  constructor(
    private readonly _http: HttpClient
  ) { }
  
  getPortfolioItems() {
    return this._http.get<IPortfolioApiItem[]>(this.apiUrl)
  }
}
