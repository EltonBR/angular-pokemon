import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardDetailsComponent } from './pokemon-card-details.component';
import { PokemonCardDetailsRoutingModule } from './pokemon-card-details-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [PokemonCardDetailsComponent],
  imports: [
    CommonModule,
    PokemonCardDetailsRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    LazyLoadImageModule,
    MatButtonModule,
    RouterModule,
    MatChipsModule,
    MatExpansionModule
  ]
})
export class PokemonCardDetailsModule { }
