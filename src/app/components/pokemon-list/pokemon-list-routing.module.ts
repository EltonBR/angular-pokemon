import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component'; 
const routes: Route[] = [
  {
    path: '',
    component: PokemonListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PokemonListRoutingModule { }
