import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private authentificationService: AuthentificationService
  ) { }

  public getUserToken(): string {
    return localStorage.getItem('currentUserToken');
  }

  logout(): void {
    this.authentificationService.logout();
  }
}
