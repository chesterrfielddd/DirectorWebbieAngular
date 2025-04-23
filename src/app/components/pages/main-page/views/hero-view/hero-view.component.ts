import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-hero-view',
  imports: [],
  templateUrl: './hero-view.component.html',
  styleUrl: './hero-view.component.scss',
})
export class HeroViewComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('heroContainer') heroContainer!: ElementRef<HTMLAreaElement>;

  ngAfterViewInit() {
    this.heroVideo.nativeElement.muted = true;
    this.heroVideo.nativeElement.play();
  }
}
