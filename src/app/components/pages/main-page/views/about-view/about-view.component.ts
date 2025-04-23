import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as content from './about-view.config';
import { MediaAccordionComponent } from '../../../../shared/mediaAccordion/media-accordion.component';

@Component({
  selector: 'app-about-view',
  imports: [
    CommonModule,
    MediaAccordionComponent
  ],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.scss'
})
export class AboutViewComponent {
  mediaData = content.ABOUT_PICTURES;

}
