import { Component, Input } from '@angular/core';
import { CardData } from '../../interfaces/homeInterfaces';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card:CardData | undefined;
}
