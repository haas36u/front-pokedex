import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import { User } from '../models/user';
 
@Injectable()
export class AuthentificationService {
	constructor(
        private http: HttpClient,
        private router: Router
    ) { }
	
	private url = 'http://localhost:8080';
    private httpOptions = {
    	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	register (user: User): Observable<User> {
		return this.http.post<User>(this.url + '/register', user, this.httpOptions);
    }

    login (user: User): Observable<User>{
        console.log('authent login')

		return this.http.post<User>(this.url + '/login', user, this.httpOptions)
            .map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user.username));
                    localStorage.setItem('currentUserToken', JSON.stringify(user.token));
                }
 
                return user;
            });
    }
 
    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserToken');
        this.router.navigate(['/pokemons']);
    }
}
