import { createContext } from "react";

export const DetailPokemonContext = createContext({
  detailPokemon: {}, 
  setDetailPokemon: () => {},
})