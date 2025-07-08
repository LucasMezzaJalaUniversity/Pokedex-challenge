import { createContext } from "react";

export const PokemonContext = createContext({
  pokemons: [], 
  setPokemons: () => {},
  listRef: [],
  loading: false, 
  setLoading: () => {}
})

// export const usePokemonsContext = () => useContext(PokemonContext);