import { useContext } from "react";
import { DetailPokemonContext } from "../../contexts/DetailPokemonContext";

export const Evolution = () => {
  const { detailPokemon } = useContext(DetailPokemonContext);

  return (
    (!detailPokemon || Object.values(detailPokemon).length === 0) ? 
      <p>There is not data available</p> : (
      <div className="data">
        <h3>Evolution chart:</h3>
      </div>
    )
  );
}