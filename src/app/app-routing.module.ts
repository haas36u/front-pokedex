import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'},
  {path: 'pokemons', component: PokemonComponent},
  {path: 'pokemons/:slug', component: PokemonDetailComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
