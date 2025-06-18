
import { Component } from '@angular/core';
import * as content from './about-view.config';
import { FaqComponent } from "../../../../shared/faq/faq.component";

@Component({
  selector: 'app-about-view',
  imports: [
    FaqComponent
],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.scss'
})
export class AboutViewComponent {
  mediaData = content.ABOUT_PICTURES;
}
