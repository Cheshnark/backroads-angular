import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from '../../../assets/icons/menu/menu.component';
import { DrawerComponent } from './drawer/drawer.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/stateInterfaces';
import { selectUser } from '../../states/user/user.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, DrawerComponent, MenuComponent, AsyncPipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showMenu = false;
  user$: Observable<string | null>  | undefined;

  constructor(private store:Store<AppState>) {
    this.user$ = this.store.select(selectUser);
  };

  onClickMenu() {
    const body = document.querySelector('body')
    body?.classList.toggle('hide-scroll')
    
    this.showMenu = true;
  };
}
