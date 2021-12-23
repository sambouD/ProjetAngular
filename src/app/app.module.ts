import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SinglePokemonComponent,
    EditPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
