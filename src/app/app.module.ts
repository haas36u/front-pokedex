import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';

import { PokemonService } from './services/pokemon.service';

@NgModule({
	declarations: [
		AppComponent,
		PokemonComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [
		PokemonService, 
		HttpClientModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
