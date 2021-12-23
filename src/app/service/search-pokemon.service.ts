import { HttpClient, HttpHeaders } from '@angular/common/http';
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

//////////////////////////////////////////////////////////////////////////////////////SUPPRESSION
  deletePokemon(pokemon:Pokemon){// prend en argument un objet pokemon
    const url = `${this.pokemonsUrlApi}/${pokemon.id}`; // constante url + id
    const httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'}) //indique le type de données envoyées
  }
     return this.http.delete<Pokemon>(url,httpOptions);   //retourne un observable (requete asynchrone de type delete)
}

///////////////////////////////////////////////////////////////////////////////////// MODIFICATION
  updatePokemon(pokemon:Pokemon):Observable<Pokemon>{// prend en argument un objet pokemon

  const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'}) //indique le type de données envoyées
  }
   return this.http.put<Pokemon>(this.pokemonsUrlApi,pokemon,httpOptions);  //retourne un observable (requete asynchrone de type delete)
}

/////////////////////////////////////////////////////////////////////////////// AJOUT
  addPokemon(pokemon:Pokemon){// prend en argument un objet pokemon

  const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'}) //indique le type de données envoyées
  }
   return this.http.post<Pokemon>(this.pokemonsUrlApi,pokemon,httpOptions);   //retourne un observable (requete asynchrone de type delete)
}


}
