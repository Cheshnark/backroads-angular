import { Component } from '@angular/core';
import { ShelterCardsComponent } from './shelter-cards/shelter-cards.component';
import { ChevronLeftComponent } from '../../../assets/icons/chevron-left/chevron-left.component';
import { ChevronRightComponent } from '../../../assets/icons/chevron-right/chevron-right.component';

@Component({
  selector: 'app-shelter-carousel',
  standalone: true,
  imports: [ShelterCardsComponent, ChevronLeftComponent, ChevronRightComponent],
  templateUrl: './shelter-carousel.component.html',
  styleUrl: './shelter-carousel.component.css'
})
export class ShelterCarouselComponent {
  // shelter variable is temporary, this is going to come from the DB.
  shelters = [
    {
      title: 'Cangas de Onís',
      body: 'Ríos, vales, carreteras con mazo de curvas, que no curwas. No te preocupes por las cascadas, desprendimientos, hay curvas, velocidad, emoción, G-U-A-U, se te va la faking olla primo.',
      services: {
        water: true,
        electricity: false,
        pet: false,
        bathroom: true,
        shower: true,
        internet: false,
        washClothes: true,
        pool: false,
        bar: false
      }
    },
    {
      title: 'Cangas de Onís',
      body: 'Ríos, vales, carreteras con mazo de curvas, que no curwas. No te preocupes por las cascadas, desprendimientos, hay curvas, velocidad, emoción, G-U-A-U, se te va la faking olla primo.',
      services: {
        water: true,
        electricity: false,
        pet: false,
        bathroom: true,
        shower: true,
        internet: false,
        washClothes: true,
        pool: false,
        bar: false
      }
    },
    {
      title: 'Cangas de Onís',
      body: 'Ríos, vales, carreteras con mazo de curvas, que no curwas. No te preocupes por las cascadas, desprendimientos, hay curvas, velocidad, emoción, G-U-A-U, se te va la faking olla primo.',
      services: {
        water: true,
        electricity: false,
        pet: false,
        bathroom: true,
        shower: true,
        internet: false,
        washClothes: true,
        pool: false,
        bar: false
      }
    },
    {
      title: 'Cangas de Onís',
      body: 'Ríos, vales, carreteras con mazo de curvas, que no curwas. No te preocupes por las cascadas, desprendimientos, hay curvas, velocidad, emoción, G-U-A-U, se te va la faking olla primo.',
      services: {
        water: true,
        electricity: false,
        pet: false,
        bathroom: true,
        shower: true,
        internet: false,
        washClothes: true,
        pool: false,
        bar: false
      }
    },
    {
      title: 'Cangas de Onís',
      body: 'Ríos, vales, carreteras con mazo de curvas, que no curwas. No te preocupes por las cascadas, desprendimientos, hay curvas, velocidad, emoción, G-U-A-U, se te va la faking olla primo.',
      services: {
        water: true,
        electricity: false,
        pet: false,
        bathroom: true,
        shower: true,
        internet: false,
        washClothes: true,
        pool: false,
        bar: false
      }
    }
  ]

  slider = document.querySelector('.slider-wrap')

  onClickLeft() {
    const slider = document.querySelector('.slider-wrap');
    slider!.scrollLeft -= 200;
  };

  onClickRight() {
    const slider = document.querySelector('.slider-wrap');
    slider!.scrollLeft += 200;
  };
}
