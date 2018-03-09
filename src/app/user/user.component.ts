import { Component, OnInit } from '@angular/core';
import { Capture } from '../models/capture';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

	ngOnInit() {
		this.getPokemons();
	}

	captures: Capture[];

	getPokemons(): void{
		this.userService.getPokemons().subscribe(captures => this.captures = captures);
  }
  
  releasePokemon(capture: Capture): void {
		this.captures = this.captures.filter(h => h !== capture);
		this.userService.releasePokemon(capture).subscribe();
  }

  fightPokemon(capture: Capture): void {
		capture.level++;
		this.userService.fightPokemon(capture).subscribe();
  }

}
