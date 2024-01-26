import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorCodeComponent } from './honor-code.component';

describe('HonorCodeComponent', () => {
  let component: HonorCodeComponent;
  let fixture: ComponentFixture<HonorCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonorCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HonorCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
