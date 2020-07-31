import { Component, OnInit } from '@angular/core';
import ScaleAnimation from '../../animations/scale-animation';
import { trigger } from '@angular/animations';
@Component({
  selector: 'app-pokemon-card-details',
  templateUrl: './pokemon-card-details.component.html',
  styleUrls: ['./pokemon-card-details.component.scss'],
  animations: [
    trigger('inOutAnimation', ScaleAnimation)
  ]
})
export class PokemonCardDetailsComponent implements OnInit {

  loadingCard: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
