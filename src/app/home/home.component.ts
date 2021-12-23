import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { SearchPokemonService } from '../service/search-pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemons:Pokemon[] = [];
  constructor(private dataService:SearchPokemonService) { }

  ngOnInit(): void {
     this.dataService.getPokemons().subscribe(data => {
       this.pokemons = data;
       console.log(this.pokemons);
     })

  }

}
