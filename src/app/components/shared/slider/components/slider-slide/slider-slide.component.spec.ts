import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSlideComponent } from './slider-slide.component';

describe('SliderSlideComponent', () => {
  let component: SliderSlideComponent;
  let fixture: ComponentFixture<SliderSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
