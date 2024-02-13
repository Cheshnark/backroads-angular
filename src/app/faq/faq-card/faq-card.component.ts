import { Component, Input } from '@angular/core';
import { CardData } from '../../interfaces/homeInterfaces';

@Component({
  selector: 'app-faq-card',
  standalone: true,
  imports: [],
  templateUrl: './faq-card.component.html',
  styleUrl: './faq-card.component.css'
})
export class FaqCardComponent {
  @Input() card:CardData | undefined
}
