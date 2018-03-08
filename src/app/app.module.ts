import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

import { PokemonService } from './services/pokemon.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		PokemonComponent,
		PokemonDetailComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		PokemonService, 
		HttpClientModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
