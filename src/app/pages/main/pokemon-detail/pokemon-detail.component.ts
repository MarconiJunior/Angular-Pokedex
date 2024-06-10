import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { PokemonModel } from "../../../../models/pokemon.model";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrl: "./pokemon-detail.component.scss"
})
export class PokemonDetailComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PokemonModel
  ) { }


  public get getAbilities(): string {
    return this.data.abilities.map((ability) => ability.ability.name).join(", ");
  }

}
