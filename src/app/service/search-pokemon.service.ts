import { Injectable } from '@angular/core';
import { POKEMONS } from '../bdd/pokemons-list';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class SearchPokemonService {

  pokemons = POKEMONS;
  pokemon: Pokemon =  new Pokemon();
  constructor() { }

// Retourne la liste des pokemons
  getPokemons():Pokemon[]{
    return POKEMONS;
  }

  getPokemon(id:number){
    let pokemons = this.getPokemons();
    for( let i = 0; i < pokemons.length; i++ ){
      if(this.pokemons[i].id == id ){
        this.pokemon = this.pokemons[i];
      }
 }
        return this.pokemon;

  }



}
