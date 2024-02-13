import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from '../../../assets/icons/menu/menu.component';
import { DrawerComponent } from './drawer/drawer.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, DrawerComponent, MenuComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  user = 'Adam';
  showMenu = false;

  onClickMenu() {
    const body = document.querySelector('body')
    body?.classList.toggle('hide-scroll')
    
    this.showMenu = true;
  };
}
