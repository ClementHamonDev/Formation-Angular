import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class PokemonListComponent implements OnInit {
  pokemons: { name: string; image: string }[] = [];
  types: { name: string }[] = [];
  selectedType: string = '';

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.getAllPokemon();
    this.loadPokemonTypes();
  }

  getAllPokemon(): void {
    this.pokeService.getPokemons().subscribe(data => {
      this.pokemons = data;
    });
  }


  loadPokemonTypes(): void {
    this.pokeService.getPokemonTypes().subscribe(response => {
      this.types = response.results;
    });
  }

  // Charge les Pokémon du type sélectionné
  onTypeChange(): void {
    if (!this.selectedType) {
      this.getAllPokemon();
      return;
    }

    this.pokeService.getPokemonsByType(this.selectedType).subscribe(response => {
      this.pokemons = response.pokemon.map((poke: any) => {
        const id = poke.pokemon.url.split('/').slice(-2, -1)[0];
        return {
          name: poke.pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };
      });
    });
  }
}