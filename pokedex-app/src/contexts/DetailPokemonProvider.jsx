import { useState } from 'react';
import { DetailPokemonContext } from './DetailPokemonContext';

export function DetailPokemonProvider({ children }) {
  const [detailPokemon, setDetailPokemon] = useState({});
  
  return (
    <DetailPokemonContext.Provider value={{ detailPokemon, setDetailPokemon }}>
      {children}
    </DetailPokemonContext.Provider>
  );
}
