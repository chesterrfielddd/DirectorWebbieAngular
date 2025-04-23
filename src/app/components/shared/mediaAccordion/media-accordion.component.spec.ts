import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAccordionComponent } from './media-accordion.component';

describe('MediaAccordionComponent', () => {
  let component: MediaAccordionComponent;
  let fixture: ComponentFixture<MediaAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
