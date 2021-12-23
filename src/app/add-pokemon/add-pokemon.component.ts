import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokemons-list';
import { Pokemon } from '../models/pokemon';


@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  pokemons = POKEMONS;
  @Input() pokemon: Pokemon = new Pokemon()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(nf: NgForm) {

    this.pokemons.unshift(this.pokemon);
    let link = ['/single', this.pokemon.id];
    this.router.navigate(link);
    alert('Felicitation vous venez d\'ajouter '+ this.pokemon.name + ' à votre pokedex')
}
}
