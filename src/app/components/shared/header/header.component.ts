import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  readonly pageWidth = window.innerWidth;
  readonly scrollTop$$ = new BehaviorSubject<number>(0);
  readonly isTopModified$$ = new BehaviorSubject<boolean>(this.scrollTop$$.value <= 40);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollTop$$.next(
      window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
    );
  }

  ngOnInit(): void {
    this.initSubscribtions();
  }

  private initSubscribtions(): void {
    this.scrollTop$$.subscribe((value) => {
      if (value <= 40 && this.pageWidth <= 400) {
        this.isTopModified$$.next(true);
      }
      if (value > 40 && this.pageWidth <= 400) {
        this.isTopModified$$.next(false);
      }
      if (this.pageWidth > 400) {
        this.isTopModified$$.next(false);
      }
    });
  }
}
