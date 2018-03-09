import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Capture } from '../models/capture';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public localStorageGetUserToken(): string {
    return JSON.parse(localStorage.getItem('currentUserToken'));
  }

  public localStorageGetUser(): string {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  private userUrl = 'http://localhost:8080/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'authorization': `${this.localStorageGetUserToken()}`})
};
	
	getPokemons (): Observable<Capture[]> {
		return this.http.get<Capture[]>(`${this.userUrl}/${this.localStorageGetUser()}/pokemons`, this.httpOptions);
  }
  
  catchPokemon ({pokemon, level}): Observable<Capture> {
    const cap = new Capture();
    cap.pokemon = pokemon;
    cap.level = level;

		return this.http.post<Capture>(`${this.userUrl}/${this.localStorageGetUser()}/pokemons`, cap, this.httpOptions);
  }

  releasePokemon (capture: Capture | number): Observable<Capture> {
		const id = typeof capture === 'number' ? capture : capture._id;
		return this.http.delete<Capture>(`${this.userUrl}/${this.localStorageGetUser()}/pokemons/${id}`, this.httpOptions);
  }
  
  fightPokemon (capture: Capture): Observable<any> {
		const id = typeof capture === 'number' ? capture : capture._id;
		return this.http.put(`${this.userUrl}/${this.localStorageGetUser()}/pokemons/${id}`, capture, this.httpOptions);
	}
}
