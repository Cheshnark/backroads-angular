import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XMarkComponent } from '../../../../assets/icons/x-mark/x-mark.component';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces/stateInterfaces';
import { selectUser } from '../../../states/user/user.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [RouterLink, XMarkComponent, AsyncPipe],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  @Input() showMenu:boolean | undefined;
  @Input() user:string | undefined;
  @Output() showMenuChange = new EventEmitter<boolean>();

  user$: Observable<string | null>  | undefined;

  constructor(private store:Store<AppState>) {
    this.user$ = this.store.select(selectUser);
  };

  onClickX() {
    const body = document.querySelector('body');

    this.showMenuChange.emit(false);   
    body?.classList.toggle('hide-scroll');
  };
}
