import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopupService } from '../../../../../services/popup.service';
import { PortfolioFilterType } from '../../../../../models';
import { IPortfolioItem } from '../../../../../models';
import { PortfolioApiService } from '../../../../../services/portfolio-api.service';
import { mapToPortfolioItem } from '../../../../../utils/map-to-portfolio-item.function';

@Component({
  selector: 'app-portfolio-view',
  imports: [CommonModule],
  templateUrl: './portfolio-view.component.html',
  styleUrl: './portfolio-view.component.scss',
})
export class PortfolioViewComponent implements OnInit {
  portfolioList: IPortfolioItem[] = [];

  filter$$ = new BehaviorSubject<PortfolioFilterType>('all');

  constructor(
    private readonly _popup: PopupService,
    private readonly _portfolioApi: PortfolioApiService
  ) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  private initSubscriptions(): void {
    this._portfolioApi.getPortfolioItems().subscribe(data => {
      data.forEach(item => {
        this.portfolioList.push(mapToPortfolioItem(item));
      })
      console.log(this.portfolioList)
    })
  }

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
