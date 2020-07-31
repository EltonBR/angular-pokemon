import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';
import ICard from '../../interfaces/card';
import { trigger } from '@angular/animations';
import ScaleAnimation from '../../animations/scale-animation';

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
      'inOutAnimation', ScaleAnimation)
  ]
})
export class PokemonListComponent implements OnInit {

  loadingCards: boolean = true;
  allPokemonCards: ICard[];
  cards: ICard[];
  constructor(private PokemonApi: PokemonListService) { }

  ngOnInit(): void {
    this.listPokemons();
  }

  listPokemons() {
    this.loadingCards = true;
    this.PokemonApi.getPokemons().subscribe((response) => {
      this.loadingCards = false;
      this.allPokemonCards = response.cards.sort(sortPokemonsByName);
      this.cards = response.cards.sort(sortPokemonsByName);
    },
    (err) => {
      this.loadingCards = false;
      console.log('error', err);
    })
  }

  searchPokemons(name: string) {
    if (name.length == 0) {
      this.cards = this.allPokemonCards;
    }
    this.cards = this.allPokemonCards.filter(item => item.name.toLowerCase().includes(name));
  }

}
