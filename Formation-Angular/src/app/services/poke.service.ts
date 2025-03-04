import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<{ name: string; image: string }[]> {
    return new Observable(observer => {
      this.http.get<any>(this.baseUrl+"/pokemon?limit=20").subscribe({
        next: (response) => {
          const pokemons = response.results.map((pokemon: { name: string; url: string }) => {
            const id = pokemon.url.split('/').slice(-2, -1)[0];
            return {
              name: pokemon.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            };
          });
          observer.next(pokemons);
          observer.complete();
        },
        error: (e) => console.error(e),
        complete: () => console.log("Completion")
      });
    });
  }

  getPokemonTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/type`);
  }

  getPokemonsByType(type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/type/${type}`);
  }
}
