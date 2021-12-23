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
    let id = this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemon(id);
  }

  goBack(): void {
    this.router.navigate(['']);
}


onSubmit(f:NgForm){
  console.log(this.pokemon);
}

}
