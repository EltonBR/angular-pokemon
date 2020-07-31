import { Component, OnInit, Input } from '@angular/core';
import ICard from '../../interfaces/card';

@Component({
  selector: 'app-pokemon-card-item',
  templateUrl: './pokemon-card-item.component.html',
  styleUrls: ['./pokemon-card-item.component.scss']
})
export class PokemonCardItemComponent implements OnInit {

  @Input() card: ICard;
  constructor() { }

  ngOnInit(): void {
  }

}
