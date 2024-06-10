import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { PokemonModel, PokemonResult } from "../../../../models/pokemon.model";
import { PokemonService } from "../../../services/pokemon.service";
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrl: "./pokemon-card.component.scss"
})
export class PokemonCardComponent implements OnInit {
  @Input("pokemon")
  pokemonResult?: PokemonResult;

  pokemon?: PokemonModel;

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void> {
    this.pokemon =
     await this.pokemonService.getPokemon(this.pokemonResult?.url ? this.pokemonResult.url : "");
  }

  openDialog(): void {
    this.dialog.open(PokemonDetailComponent, {
      data: this.pokemon
    });
  }
}
