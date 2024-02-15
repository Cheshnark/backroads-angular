import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent, StoreModule, StoreModule.forRoot({})]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change name variable', () => {
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));

    input.triggerEventHandler('change', { target: { value: 'Banana' }})

    expect(component.name).toBe('Banana')
  })
});
