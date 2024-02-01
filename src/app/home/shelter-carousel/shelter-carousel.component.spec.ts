import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterCarouselComponent } from './shelter-carousel.component';

describe('ShelterCarouselComponent', () => {
  let component: ShelterCarouselComponent;
  let fixture: ComponentFixture<ShelterCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShelterCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
