import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IAboutPicture } from '../../../models';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  animations: [
    trigger('slideAnimation', [
      state('open', style({ height: '*' })),
      state('closed', style({ height: '0px' })),
      transition('closed <=> open', animate('200ms ease-in-out')),
    ]),
  ],
})
export class FaqComponent {
  @Input() data: IAboutPicture[];

  openIndex: number | null = 0;

  handleCardClick(index: number): void {
    this.openIndex === index
      ? (this.openIndex = null)
      : (this.openIndex = index);
  }
}
