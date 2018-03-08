import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

	@Input() pokemon : Pokemon;

	constructor(
		private route: ActivatedRoute,
		private pokemonService: PokemonService,
		private location: Location
	) { }

	ngOnInit() {
		this.getPokemon();
	}

	getPokemon(): void {
		const slug = this.route.snapshot.paramMap.get('slug');
		this.pokemonService.getPokemon(slug).subscribe(pokemon => this.pokemon = pokemon);
	}

	goBack() : void {
		this.location.back();
	}
}
