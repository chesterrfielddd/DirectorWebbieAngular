import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPortfolioItem } from '../models/portfolio-item.interface';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popupDataSubject = new Subject<any>();
  popupData$ = this.popupDataSubject.asObservable();
  private isVisibleSubject = new Subject<boolean>();
  isVisible$ = this.isVisibleSubject.asObservable();

  openPopup(data: IPortfolioItem) {
    this.popupDataSubject.next(data);
    this.isVisibleSubject.next(true);
  }

  closePopup() {
    this.isVisibleSubject.next(false);
  }
}
