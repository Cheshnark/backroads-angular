import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XMarkComponent } from '../../../../assets/icons/x-mark/x-mark.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [RouterLink, XMarkComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  @Input() showMenu:boolean | undefined;
  @Input() user:string | undefined;
  @Output() showMenuChange = new EventEmitter<boolean>();

  onClickX() {
    const body = document.querySelector('body');

    this.showMenuChange.emit(false);   
    body?.classList.toggle('hide-scroll');
  };
}
