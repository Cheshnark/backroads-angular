import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../interfaces/stateInterfaces';
import { selectUser } from '../../states/user/user.selector';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { login, logout } from '../../states/user/user.action';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  user$: Observable<string | null>  | undefined;

  constructor(private store:Store<AppState>) {
    this.user$ = this.store.select(selectUser);
  };

  name = ''

  handleChangeName (e: any) {
    this.name = e.target.value
  }

  handleLogin() {
    this.store.dispatch(login({username: this.name}));
    this.name = ''
  };

  handleRegister() {
    this.store.dispatch(login({username: this.name}));
  };

  handleLogout() {
    this.store.dispatch(logout());
  };
}
