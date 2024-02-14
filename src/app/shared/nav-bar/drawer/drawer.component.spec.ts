import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerComponent } from './drawer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerComponent, RouterTestingModule, StoreModule.forRoot({})]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle body class and `showMenu` value on click x icon', () => {
    fixture.detectChanges();
    const xIcon = fixture.debugElement.query(By.css('.x-icon'));
    const body = document.querySelector('body')
    body?.classList.add('hide-scroll')
    // Spy on emitter 
    jest.spyOn(component.showMenuChange, 'emit');

    expect(xIcon).toBeTruthy();

    // With this I emulate a click on the menu icon
    xIcon.triggerEventHandler('click', null);

    // // Check showMenu turns to true after click
    expect(component.showMenuChange.emit).toHaveBeenCalledWith(false)

    // // Check if body has class 'hide-scroll after click'
    expect(body?.classList.contains('hide-scroll')).toBe(false)
  });
});
