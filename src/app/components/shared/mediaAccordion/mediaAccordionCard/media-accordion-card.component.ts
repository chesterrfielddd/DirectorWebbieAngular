import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  viewChild,
} from '@angular/core';
import { IAboutPicture } from '../../../../models';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-media-accordion-card',
  imports: [CommonModule],
  templateUrl: './media-accordion-card.component.html',
  styleUrl: './media-accordion-card.component.scss',
})
export class MediaAccordionCardComponent implements OnInit {
  @Input() data: IAboutPicture;
  @Input() index: number;
  @Input() isOpen: boolean;
  @Output() toggle = new EventEmitter<void>();
  @ViewChild('cardImage') cardImage: ElementRef;

  constructor(private readonly _rerender: Renderer2) {}

  ngOnInit(): void {
    console.log(this.index, this.isOpen)
  }

  ngAfterViewInit(): void {
    if (this.isOpen) {
      this._rerender.setStyle(this.cardImage.nativeElement, 'width', 'auto');
    }
  }

  handleCardClick(): void {
    this.isOpen
    ? this._rerender.setStyle(this.cardImage.nativeElement, 'width', 'auto')
    : this._rerender.removeStyle(this.cardImage.nativeElement, 'width');
    this.toggle.emit();
    console.log('card click', this.isOpen)
  }
}
