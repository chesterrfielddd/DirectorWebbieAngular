import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PortfolioFilterType } from '../../../../../models/portfolio-filter.type';
import { PORTFOLIO_LIST } from './portfolio-view.config';
import { PopupService } from '../../../../../services/popup.service';
import { IPortfolioItem } from '../../../../../models/portfolio-item.interface';

@Component({
  selector: 'app-portfolio-view',
  imports: [CommonModule],
  templateUrl: './portfolio-view.component.html',
  styleUrl: './portfolio-view.component.scss',
})
export class PortfolioViewComponent implements OnInit {
  portfolioList = PORTFOLIO_LIST;

  filter$$ = new BehaviorSubject<PortfolioFilterType>('all');

  constructor(private _popup: PopupService) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  private initSubscriptions(): void {}

  handlePortfolioItemClick(data: IPortfolioItem) {
    this._popup.openPopup(data);
  }

  handleFilterChange(filter: PortfolioFilterType): void {
    this.filter$$.next(filter);
  }

  checkIsAllowed(filter: PortfolioFilterType): boolean {
    if (this.filter$$.value === 'all') {
      return true;
    }
    if (filter === this.filter$$.value) {
      return true;
    }
    return false;
  }
}
