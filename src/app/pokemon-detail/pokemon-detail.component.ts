import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

	@Input() pokemon : Pokemon;

	private slug = this.route.snapshot.paramMap.get('slug');

	constructor(
		private route: ActivatedRoute,
		private pokemonService: PokemonService,
		private location: Location,
		private userService: UserService
	) { }

	ngOnInit() {
		this.getPokemon();
		this.route.url.subscribe(url => this.getPokemon())
	}

	getPokemon(): void {
		const slug = this.route.snapshot.paramMap.get('slug');
		this.pokemonService.getPokemon(slug).subscribe(pokemon => {
			this.pokemon = pokemon;
			this.pokemon.evolutions.push(this.pokemon);
			pokemon.evolutions.sort((a, b) => a.level - b.level);
		});
	}

	catchPokemon(pokemon: Pokemon): void {
		this.userService.catchPokemon({pokemon: pokemon.slug, level: pokemon.level}).subscribe(() => console.log('dododo'));;
	}
}
