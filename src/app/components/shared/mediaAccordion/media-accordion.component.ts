import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { IAboutPicture } from '../../../models';
import { BehaviorSubject } from 'rxjs';
import { MediaAccordionCardComponent } from './mediaAccordionCard/media-accordion-card.component';

@Component({
  selector: 'app-media-accordion',
  imports: [CommonModule, MediaAccordionCardComponent],
  templateUrl: './media-accordion.component.html',
  styleUrl: './media-accordion.component.scss',
})
export class MediaAccordionComponent implements OnInit {
  @Input() data: IAboutPicture[];

  openedCardIndex: number | null = 0;

  constructor() {}

  ngOnInit(): void {
    this.initSubscription();
  }

  private initSubscription(): void {}

  onToggle(index: number) {
    this.openedCardIndex = this.openedCardIndex === index ? null : index;
    console.log('toggled', this.openedCardIndex)
  }
}
