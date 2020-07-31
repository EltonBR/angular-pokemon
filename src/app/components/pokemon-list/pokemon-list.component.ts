import { Component, OnInit, HostListener } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';
import ICard from '../../interfaces/card';
import { trigger } from '@angular/animations';
import ScaleAnimation from '../../animations/scale-animation';
import { SearchDataService } from '../../services/search-data.service';

class Paginator {

  private totalPages: number;
  private lastPageCountItens: number;
  private atualPage: number = 0;
  constructor(private data:any, private itensPerPage:number = 12) {
    this.totalPages = parseInt((data.length/itensPerPage).toString());
    this.lastPageCountItens = data.length%itensPerPage;

    console.log(this.totalPages);
    console.log(this.lastPageCountItens);
  }

  getPage(page: number) {
      if (page > this.totalPages) {
        this.atualPage = page;
        return this.data.slice(this.data.length - this.lastPageCountItens, this.data.length);
      } else {
        return this.data.slice(this.atualPage*page, (this.atualPage*page)+this.itensPerPage);
        this.atualPage = page;
      }
  }
  end() {
    return this.atualPage > this.totalPages;
  }

}
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
  allPokemonCards: ICard[] = [];
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
      this.allPokemonCards = response.cards.sort(sortPokemonsByName);
      this.cards = this.allPokemonCards;
      this.listenSearch();
      window.pp = new Paginator(this.allPokemonCards);
    },
    (err) => {
      this.loadingCards = false;
      console.log('error', err);
    })
  }

  searchPokemons(name: string) {
    if (name.length == 0) {
      this.cards = this.allPokemonCards;
    } else {
      this.cards = this.allPokemonCards.filter(item => item.name.toLowerCase().includes(name));
    }
  }

  displayMoreCards() {
   
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos == max )   {
      this.displayMoreCards();
    }
  }

}
