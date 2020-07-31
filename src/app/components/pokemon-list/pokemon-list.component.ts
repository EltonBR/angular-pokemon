import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';
import ICard from '../../interfaces/card';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const sortPokemonsByName = (a: ICard, b: ICard) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
};

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ transform: 'scale(0.3)'}),
            animate('300ms ease-out', 
                    style({ transform: 'scale(1)' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ transform: 'scale(1)'}),
            animate('200ms ease-in', 
                    style({ transform: 'scale(0)' }))
          ]
        )
      ]
    )
  ]
})
export class PokemonListComponent implements OnInit {

  allPokemonCards: ICard[];
  cards: ICard[];
  constructor(private PokemonApi: PokemonListService) { }

  ngOnInit(): void {
    this.listPokemons();
  }

  listPokemons() {
    this.PokemonApi.getPokemons().subscribe((response) => {
      this.allPokemonCards = response.cards.sort(sortPokemonsByName);
      this.cards = response.cards.sort(sortPokemonsByName);

      setTimeout(() => {
        this.searchPokemons('bello');

      }, 5000)
    },
    (err) => {
      console.log('error', err);
    })
  }

  searchPokemons(name: string) {
    this.cards = this.allPokemonCards.filter(item => item.name.toLowerCase().includes(name));
  }

}
