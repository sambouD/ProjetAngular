import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { SearchPokemonService } from '../service/search-pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
  @Input() pokemon:any;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private pokemonService:SearchPokemonService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']; // recuperation de l'id du pokemon dans l'url active
    this.pokemon = this.pokemonService.getPokemon(id); // Recupere le pokemon avec l'id methode GET() + ID du pokemon
  }

  goBack(): void {
    this.router.navigate(['']); // fonction de redirection vers la page home
}


onSubmit(f:NgForm){
  console.log(this.pokemon);
}

}
