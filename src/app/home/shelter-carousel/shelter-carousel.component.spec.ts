import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ShelterCarouselComponent } from './shelter-carousel.component';
import { By } from '@angular/platform-browser';

describe('ShelterCarouselComponent', () => {
  let component: ShelterCarouselComponent;
  let fixture: ComponentFixture<ShelterCarouselComponent>;
  let compiled: HTMLElement;

  // Befor the test block
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterCarouselComponent]
    })
    .compileComponents();
  });
   
  beforeEach(async () => {
    fixture = TestBed.createComponent(ShelterCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  // Testing block
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  })

  it('should call onClickLeft func', fakeAsync(() => {
    const spy = jest.spyOn(component, 'onClickLeft');

    const button = fixture.debugElement.nativeElement.querySelector('.left');
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }))

  it('should call onClickRight func', fakeAsync(() => {
    const spy = jest.spyOn(component, 'onClickRight');

    const button = fixture.debugElement.nativeElement.querySelector('.right');
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }))
});
