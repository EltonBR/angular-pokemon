import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private PokemonApi: PokemonListService) { }

  ngOnInit(): void {
    this.listPokemons();
  }

  listPokemons() {
    this.PokemonApi.getPokemons().subscribe((response) => {
      console.log(response.cards[0]);

    },
    (err) => {
      console.log('error', err);
    })
  }

}
