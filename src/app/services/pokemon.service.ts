import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

import { PokemonModel, PokemonResult } from "../../models/pokemon.model";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private BASE_URL = "https://pokeapi.co/api/v2";
  constructor(private http: HttpClient) { }

  async getPokemons(offset: number, limit: number): Promise<PokemonResult[]> {
    return (
      await
      firstValueFrom(this.http.get<{results: PokemonResult[]}>
      (`${this.BASE_URL}/pokemon?offset=${offset}&limit=${limit}`)
      )
    ).results;
  }

  async getPokemon(url: string): Promise<PokemonModel> {
    return await firstValueFrom(this.http.get<PokemonModel>(url));
  }

  async searchPokemon(name: string): Promise<PokemonModel> {
    return await firstValueFrom(this.http.get<PokemonModel>(`${this.BASE_URL}/pokemon/${name}`));
  }
}
