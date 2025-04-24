import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAboutPicture } from '../../../../models';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-media-accordion-card',
  imports: [CommonModule],
  templateUrl: './media-accordion-card.component.html',
  styleUrl: './media-accordion-card.component.scss',
  animations: [
    trigger('slideAnimation', [
      state('closed', style({ width: '0px' })),
      state('open', style({ width: '*' })),
      transition('closed <=> open', animate('400ms ease-in-out')),
    ]),
  ],
})
export class MediaAccordionCardComponent {
  @Input() data: IAboutPicture;
  @Input() isOpen: boolean = false;
  @Input() index: number;
  @Output() toggle = new EventEmitter<void>();

  handleCardClick() {
    this.toggle.emit();
  }
}
