import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterCardsComponent } from './shelter-cards.component';

describe('ShelterCardsComponent', () => {
  let component: ShelterCardsComponent;
  let fixture: ComponentFixture<ShelterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShelterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
