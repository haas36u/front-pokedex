import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  user: User;

  ngOnInit() {
    this.user = new User();
  }

  login(): void {
    this.authentificationService.login(this.user).subscribe(user => this.router.navigate(['/user-pokemons']));
  }

}
