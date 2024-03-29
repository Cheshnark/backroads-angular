import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent, RouterTestingModule, StoreModule.forRoot({})]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Backroads');
  });

  it('should toggle body class and `showMenu` value on click', () => {
    fixture.detectChanges();
    const menuIcon = fixture.debugElement.query(By.css('.menu-icon'));
    const body = document.querySelector('body')

    expect(menuIcon).toBeTruthy();

    // With this I emulate a click on the menu icon
    menuIcon.triggerEventHandler('click', null);

    // Check showMenu turns to true after click
    expect(component.showMenu).toBe(true);

    // Check if body has class 'hide-scroll after click'
    expect(body?.classList.contains('hide-scroll')).toBe(true)
  });
});
