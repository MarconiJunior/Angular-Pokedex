import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

@NgModule({
  declarations: [
    MainComponent,
    PokemonCardComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MainModule { }
