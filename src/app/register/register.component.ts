import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  user: User;

  ngOnInit() {
    this.user = new User();
  }

  register(): void {
			this.authentificationService.register(this.user).subscribe(() => this.router.navigate(['/login']));
  }
}
