import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPortfolioApiItem } from '../models/portfolio-api-item.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioApiService {
  apiUrl = 'https://admin.ivankapustin.com/wp-json/wp/v2/posts';

  constructor(
    private readonly _http: HttpClient
  ) { }
  
  getPortfolioItems() {
    return this._http.get<IPortfolioApiItem[]>(this.apiUrl)
  }
}
