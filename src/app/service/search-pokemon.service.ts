import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POKEMONS } from '../bdd/pokemons-list';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class SearchPokemonService {

  pokemons = POKEMONS;
  pokemon: Pokemon =  new Pokemon();
  private pokemonsUrlApi = 'api/pokemons';


  constructor(private http:HttpClient) { }


  getPokemons():Observable<Pokemon[]>{
     return this.http.get<Pokemon[]>(this.pokemonsUrlApi);
  }



  getPokemon(id:number){
     const url = `${this.pokemonsUrlApi}/${id}`;
     return this.http.get<Pokemon>(url);
}



}
