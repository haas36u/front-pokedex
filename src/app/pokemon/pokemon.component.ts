import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../mock-pokemon';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

	pokemons = POKEMONS;

	constructor() { }

	ngOnInit() {
	}

}
