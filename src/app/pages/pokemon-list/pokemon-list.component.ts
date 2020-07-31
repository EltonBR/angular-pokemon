import { Component, OnInit, HostListener } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';
import ICard from '../../interfaces/card';
import { trigger } from '@angular/animations';
import ScaleAnimation from '../../animations/scale-animation';
import { SearchDataService } from '../../services/search-data.service';
import { Paginator } from '../../helpers/paginator';

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
    trigger('inOutAnimation', ScaleAnimation)
  ]
})
export class PokemonListComponent implements OnInit {
  searchActive: boolean = false;
  loadingCards: boolean = true;
  allPokemonCards: Paginator;
  cards: ICard[] = [];
  constructor(private PokemonApi: PokemonListService, private searchListener: SearchDataService) { }

  ngOnInit(): void {
    this.listPokemons();
  }

  listenSearch() {
    this.searchListener.getData().subscribe((data: string) => {
     if (data.length > 2 || data.length == 0) {
      this.searchPokemons(data);
     }
    });
  }

  listPokemons() {
    this.loadingCards = true;
    this.PokemonApi.getPokemons().subscribe((response) => {
      this.loadingCards = false;
      this.allPokemonCards = new Paginator(response.cards.sort(sortPokemonsByName));;
      this.cards = this.allPokemonCards.getPageData();
      this.listenSearch();

    },
    (err) => {
      this.loadingCards = false;
      console.log('error', err);
    })
  }

  searchPokemons(name: string) {
    if (name.length == 0) {
      this.searchActive = false;
      this.allPokemonCards.setPage(0);
      this.cards = this.allPokemonCards.getPageData();
    } else {
      this.searchActive = true;
      this.cards = this.allPokemonCards.getDataset().filter(item => item.name.toLowerCase().includes(name));
    }
  }

  displayMoreCards() {
    this.allPokemonCards.nextPage();
    if (!this.allPokemonCards.end()) {
      this.cards = [...this.cards, ...this.allPokemonCards.getPageData()];
    }
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos == max )   {

      if (!this.searchActive) {
        this.displayMoreCards();
      }
    }
  }

}
