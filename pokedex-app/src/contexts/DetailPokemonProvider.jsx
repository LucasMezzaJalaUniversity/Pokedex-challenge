import { useState } from 'react';
import { DetailPokemonContext } from './DetailPokemonContext';

export function DetailPokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState([]);
  
  return (
    <DetailPokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </DetailPokemonContext.Provider>
  );
}
