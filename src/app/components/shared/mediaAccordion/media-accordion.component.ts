import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { MediaAccordionCardComponent } from './mediaAccordionCard/media-accordion-card.component';

@Component({
  selector: 'app-media-accordion',
  imports: [CommonModule],
  templateUrl: './media-accordion.component.html',
  styleUrl: './media-accordion.component.scss',
})
export class MediaAccordionComponent implements AfterContentInit {
  @ContentChildren(MediaAccordionCardComponent)
  items!: QueryList<MediaAccordionCardComponent>;

  private currentOpenIndex: number | null = null;

  ngAfterContentInit() {
    this.items.forEach((item, index) => {
      item.toggle.subscribe(() => this.toggleCard(index));
    });

    setTimeout(() => {
      if (this.items.length > 0) {
        this.toggleCard(0);
      }
    });
  }
  toggleCard(index: number) {
    if (this.currentOpenIndex === index) {
      this.items.get(index)!.isOpen = false;
      this.currentOpenIndex = null;
    } else {
      if (this.currentOpenIndex !== null) {
        this.items.get(this.currentOpenIndex)!.isOpen = false;
      }

      this.items.get(index)!.isOpen = true;
      this.currentOpenIndex = index;
    }
  }
}
