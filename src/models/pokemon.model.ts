export interface PokemonResult {
  name: string;
  url: string
}

export interface PokemonModel {
  id: number;
  name: string;
  weight: number;
  abilities: Ability[];
  types: Type[];
  sprites: Sprites;
}

export interface Ability {
  slot: number;
  ability: NamedApiResource;
}

export interface NamedApiResource {
  name: string
}

export interface Type {
  slot: number;
  type: NamedApiResource;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: OtherSprites;
  versions: VersionSprites;
  animated: Sprites;
}

export interface OtherSprites {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

export interface Home {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface VersionSprites {
  [key: string]: { [key: string]: Sprites };
}

export interface DreamWorld {
  front_default: string;
  front_female: string;
}
