import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardItemComponent } from './pokemon-card-item.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [PokemonCardItemComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [PokemonCardItemComponent]
})
export class PokemonCardItemModule { }
