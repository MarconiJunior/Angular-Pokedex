import { Component, HostListener, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { PokemonResult } from "../../../models/pokemon.model";
import { PokemonService } from "../../services/pokemon.service";

import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss"
})
export class MainComponent implements OnInit {
  pokemons: PokemonResult[] = [];
  maxRecords: number = 1008;
  limit: number = 12;
  offset: number = 0;
  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) { }
  async ngOnInit(): Promise<void> {
    await this.loadPokemons();
  }

  private async loadPokemons(
    offset = this.offset,
    limit = this.limit
  ): Promise<void> {
    this.pokemons.push(...await this.pokemonService.getPokemons(offset, limit));
  }

  private loadMore(): void {
    this.offset += this.limit;
    const qtdRecordWithNextPage = this.offset + this.limit;
    if (qtdRecordWithNextPage >= this.maxRecords) {
      const newLimit = this.maxRecords - this.offset;
      this.loadPokemons(this.offset, newLimit);
    } else {
      this.loadPokemons();
    }
  }

  search(name: string): void {
    this.pokemonService.searchPokemon(name).then((pokemonResult) => {
      this.dialog.open(PokemonDetailComponent, {
        data: pokemonResult
      });
    });
  }

  @HostListener("scroll", [ "$event" ])
  onScroll(event: any): void {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 50) {
      this.loadMore();
    }
  }
}
