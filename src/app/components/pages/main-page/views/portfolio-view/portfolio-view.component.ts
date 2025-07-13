import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PORTFOLIO_LIST } from './portfolio-view.config';
import { PopupService } from '../../../../../services/popup.service';
import { PortfolioFilterType } from '../../../../../models';
import { IPortfolioItem } from '../../../../../models';
import { PortfolioApiService } from '../../../../../services/portfolio-api.service';

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
    this._portfolioApi.getPortfolioItems().subscribe(data => {data.map(item => {
      this.portfolioList.push({
        name: item.title.rendered,
        description: item.acf.description,
        category: item.acf.category,
        coverUrl: item.acf.coverUrl,
        videoUrl: item.acf.videoLink
      })
    })
    console.log(this.portfolioList)
  })
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
