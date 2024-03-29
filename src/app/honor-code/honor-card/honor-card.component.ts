import { Component, Input } from '@angular/core';
import { CardData } from '../../interfaces/homeInterfaces';

@Component({
  selector: 'app-honor-card',
  standalone: true,
  imports: [],
  templateUrl: './honor-card.component.html',
  styleUrl: './honor-card.component.css'
})
export class HonorCardComponent {
  @Input() card:CardData | undefined;
}
