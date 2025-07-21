import { useState, useRef } from 'react';
import { PokemonContext } from './PokemonContext';

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef([]);
  
  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons, listRef, loading, setLoading }}>
      {children}
    </PokemonContext.Provider>
  );
}
