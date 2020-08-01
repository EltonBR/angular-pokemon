import { Component, OnInit } from '@angular/core';
import ScaleAnimation from '../../animations/scale-animation';
import { trigger } from '@angular/animations';
import { PokemonCardDetailsService } from './pokemon-card-details.service';
import { ActivatedRoute } from '@angular/router';
import ICard from '../../interfaces/card';

@Component({
  selector: 'app-pokemon-card-details',
  templateUrl: './pokemon-card-details.component.html',
  styleUrls: ['./pokemon-card-details.component.scss'],
  animations: [
    trigger('inOutAnimation', ScaleAnimation)
  ]
})

export class PokemonCardDetailsComponent implements OnInit {
  cardDetails: ICard;
  panelOpenState: boolean;
  loadingCard: boolean;
  cardId: string;
  constructor(private api: PokemonCardDetailsService, private atualRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.atualRoute.params.subscribe((params) => {
      this.cardId = params.id;
      this.getCardDetails(this.cardId);
    });
  }

  getCardDetails(id: string): void {
    this.loadingCard = true;
    this.api.getPokemonCard(id).subscribe((response) => {
      this.loadingCard = false;
      this.cardDetails = response.card;
    }, (err) => {
      console.log('err', err);
    });
  }
}
