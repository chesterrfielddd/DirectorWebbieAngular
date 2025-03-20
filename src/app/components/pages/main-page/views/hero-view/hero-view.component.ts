import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-hero-view',
  imports: [],
  templateUrl: './hero-view.component.html',
  styleUrl: './hero-view.component.scss',
})
export class HeroViewComponent implements AfterViewInit, OnInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('heroContainer') heroContainer!: ElementRef<HTMLAreaElement>;

  cursorPositionX = 0;
  cursorPositionY = 0;
  // rect: DOMRect;

  ngOnInit() {
    this.initSubscriptions();
  }

  initSubscriptions() {
    // document.addEventListener('mousemove', (e) => {
    //   this.cursorPositionX = e.clientX + 10 - this.rect.left;
    //   this.cursorPositionY = e.clientY - 20 - this.rect.top;
    // });
  }

  ngAfterViewInit() {
    this.heroVideo.nativeElement.muted = true;
    this.heroVideo.nativeElement.play();
    // this.rect = this.heroContainer.nativeElement.getBoundingClientRect();
  }
}
