import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardItemComponent } from './pokemon-card-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [PokemonCardItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    LazyLoadImageModule
  ],
  exports: [PokemonCardItemComponent]
})
export class PokemonCardItemModule { }
