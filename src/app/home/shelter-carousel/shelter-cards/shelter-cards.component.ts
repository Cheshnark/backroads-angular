import { Component, Input } from '@angular/core';
import { Shelter } from '../../../interfaces/homeInterfaces';

@Component({
  selector: 'app-shelter-cards',
  standalone: true,
  imports: [],
  templateUrl: './shelter-cards.component.html',
  styleUrl: './shelter-cards.component.css'
})
export class ShelterCardsComponent {
  @Input() shelter:Shelter | undefined
}
