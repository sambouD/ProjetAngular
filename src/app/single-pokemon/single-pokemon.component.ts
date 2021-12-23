import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { SearchPokemonService } from '../service/search-pokemon.service';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {
pokemon:Pokemon = new Pokemon();


  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private pokemonService:SearchPokemonService) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemon(id);
  }

  goBack(): void {
    this.router.navigate(['']);
}


remove(){
  const index = this.pokemonService.getPokemons().indexOf(this.pokemon,0);
   if (index > -1) {
    this.pokemonService.getPokemons().splice(index, 1);
   }
   this.goBack();
}

}
