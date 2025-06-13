import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { SliderSlideComponent } from './components';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements AfterViewInit, OnInit {
  @ContentChildren(SliderSlideComponent) slides!: QueryList<SliderSlideComponent>;
  @ViewChild('slider') slider!: ElementRef<HTMLElement>;
  @ViewChild('leftArrow') leftArrow!: ElementRef<HTMLElement>;
  @ViewChild('rightArrow') rightArrow!: ElementRef<HTMLElement>;
  @ViewChild('rail') rail!: ElementRef<HTMLElement>;
  @ViewChildren('paginationDot') paginationDots!: QueryList<ElementRef>;

  sliderWidth: number;
  sliderHeight: number;
  activeSlide$$ = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    this.initSubscribtions();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateSlidesSize());
  }

  private initSubscribtions(): void {
    this.activeSlide$$.subscribe((index) => this.updateActiveSlide(index));
  }

  private updateSlidesSize(): void {
    this.sliderWidth = this.slider.nativeElement.getBoundingClientRect().width;
    this.sliderHeight =
      this.slider.nativeElement.getBoundingClientRect().height;
    this.slides.forEach((item) => {
      item.sliderWidth = this.sliderWidth;
      item.sliderHeight = this.sliderHeight;
    });
  }

  private updateActiveSlide(activatedIndex: number): void {
    if (this.rail) {
      this.rail.nativeElement.style.left = `-${activatedIndex * this.sliderWidth}px`;
    }
  }

  handleRightArrowClick(): void {
    if (this.activeSlide$$.value < this.slides.length - 1) {
      this.activeSlide$$.next(this.activeSlide$$.value + 1);
    }
  }

  handleLeftArrowClick(): void {
    if (this.activeSlide$$.value > 0) {
      this.activeSlide$$.next(this.activeSlide$$.value - 1);
    }
  }

  handlePaginationClick(index: number): void {
    this.activeSlide$$.next(index);
  }
}
