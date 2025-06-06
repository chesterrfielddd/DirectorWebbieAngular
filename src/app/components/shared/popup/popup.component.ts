import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from '../../../services/popup.service';
import { CommonModule } from '@angular/common';
import { IPortfolioItem } from '../../../models/portfolio-item.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  imports: [CommonModule],
})
export class PopupComponent implements OnDestroy {
  data!: IPortfolioItem;
  isVisible = false;
  videoLink!: SafeResourceUrl;

  private dataSubscription: Subscription;
  private visibilitySubscription: Subscription;

  constructor(
    private _popupService: PopupService,
    private _sanitizer: DomSanitizer
  ) {
    this.dataSubscription = this._popupService.popupData$.subscribe((data) => {
      this.data = data;
      this.videoLink = this._sanitizer.bypassSecurityTrustResourceUrl(
        data.videoUrl
      );
    });

    this.visibilitySubscription = this._popupService.isVisible$.subscribe(
      (visible) => {
        this.isVisible = visible;
      }
    );
  }

  close() {
    this._popupService.closePopup();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
    this.visibilitySubscription.unsubscribe();
  }
}
