import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCardDetailsComponent } from './pokemon-card-details.component';
const routes: Routes = [
  {
    path: 'card-details/:id',
    component: PokemonCardDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PokemonCardDetailsRoutingModule { }
