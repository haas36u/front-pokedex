import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

import { PokemonService } from './services/pokemon.service';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthentificationService } from './services/authentification.service';
import { UserComponent } from './user/user.component';

@NgModule({
	declarations: [
		AppComponent,
		PokemonComponent,
		PokemonDetailComponent,
		RegisterComponent,
		LoginComponent,
		UserComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [
		PokemonService, 
		HttpClientModule,
		AuthentificationService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
