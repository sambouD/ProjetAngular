import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokemons-list';
import { Pokemon } from '../models/pokemon';
import { SearchPokemonService } from '../service/search-pokemon.service';


@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  pokemons = POKEMONS; //retourne la liste des pokemons
  @Input() pokemon: Pokemon = new Pokemon()
  constructor(private router: Router,private pokemonService: SearchPokemonService) { }

  ngOnInit(): void {
  }

  onSubmit(nf: NgForm) {

    this.pokemonService.addPokemon(this.pokemon).subscribe(data => { // appel de la requette POST() pour ajouter un pokemon
      this.pokemon = data
    });
    let link = ['/single', this.pokemon.id];
    this.router.navigate(link);// Redirection vers la page single du pokemon ajouté
    alert('Felicitation vous venez d\'ajouter '+ this.pokemon.name + ' à votre pokedex')
}
}
