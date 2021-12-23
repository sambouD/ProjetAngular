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
pokemon:any;


  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private pokemonService:SearchPokemonService) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemon(id).subscribe(data => {
      this.pokemon = data; // Recupere le pokemon avec l'id de celui dans l'url
    });
  }

  goBack(): void {
    this.router.navigate(['']);
}


 remove(){
  this.pokemonService.deletePokemon(this.pokemon).subscribe(_=> this.goBack()); // Suppression via la methode DELETE() + pokemon a supprimer
 }

}
