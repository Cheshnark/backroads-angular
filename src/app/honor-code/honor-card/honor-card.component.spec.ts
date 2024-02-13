import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorCardComponent } from './honor-card.component';

describe('HonorCardComponent', () => {
  let component: HonorCardComponent;
  let fixture: ComponentFixture<HonorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonorCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HonorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
