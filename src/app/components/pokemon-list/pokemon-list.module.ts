import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonCardItemModule } from './../pokemon-card-item/pokemon-card-item.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    PokemonCardItemModule,
    MatProgressBarModule
  ]
})
export class PokemonListModule { }
