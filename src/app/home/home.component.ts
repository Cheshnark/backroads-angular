import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardData } from '../interfaces/homeInterfaces';
import { ShelterCarouselComponent } from './shelter-carousel/shelter-carousel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, ShelterCarouselComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardsData: CardData[] = [
    {
      title: 'Shelter',
      body: 'Find places to sleep or chill during your routes. Update your adventure map.'
    },
    {
      title: 'Routes',
      body: 'Take a look at our route proposals or create your own. Share your scenic routes.'
    },
    {
      title: 'Comunity',
      body: 'Share your locations and thoughts with the community to help it grow.'
    }
  ];
}
