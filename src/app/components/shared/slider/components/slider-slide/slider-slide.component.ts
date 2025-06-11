import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider-slide',
  imports: [],
  templateUrl: './slider-slide.component.html',
  styleUrl: './slider-slide.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SliderSlideComponent {
  sliderWidth: number = 100;
  sliderHeight: number = 100;
}
