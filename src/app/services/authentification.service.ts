import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/user';
 
@Injectable()
export class AuthentificationService {
	constructor(private http: HttpClient) { }
	
	private url = 'http://localhost:8080';
    private httpOptions = {
    	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	register (user: User): Observable<User> {
		return this.http.post<User>(this.url + '/register', user, this.httpOptions);
    }

    login (user: User): Observable<User> {
		return this.http.post<User>(this.url + '/login', user, this.httpOptions)
            .map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUserToken', JSON.stringify(user));
                }
 
                return user;
            });
    }
 
    logout() {
        localStorage.removeItem('currentUserToken');
    }
}
