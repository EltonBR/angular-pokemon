import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardDetailsComponent } from './pokemon-card-details.component';
import { PokemonCardDetailsRoutingModule } from './pokemon-card-details-routing.module'


@NgModule({
  declarations: [PokemonCardDetailsComponent],
  imports: [
    CommonModule,
    PokemonCardDetailsRoutingModule
  ]
})
export class PokemonCardDetailsModule { }
