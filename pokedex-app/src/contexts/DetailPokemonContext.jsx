import { createContext } from "react";

export const DetailPokemonContext = createContext({
  pokemon: {}, 
  setPokemon: () => {},
})