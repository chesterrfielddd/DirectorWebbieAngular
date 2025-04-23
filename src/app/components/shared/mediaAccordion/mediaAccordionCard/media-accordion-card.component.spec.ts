import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAccordionCardComponent } from './media-accordion-card.component';

describe('MediaAccordionCardComponent', () => {
  let component: MediaAccordionCardComponent;
  let fixture: ComponentFixture<MediaAccordionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaAccordionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaAccordionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
