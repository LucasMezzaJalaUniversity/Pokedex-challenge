import { useContext } from "react";
import { DetailPokemonContext } from "../../contexts/DetailPokemonContext";

export const Data = () => {
  const { pokemon } = useContext(DetailPokemonContext);

  console.log(pokemon, pokemon.species)
  
  return (
    (pokemon || Object.values(pokemon).length > 0) ? (
      <div>
        <h3>About this Pokemon:</h3>
        <p></p>
        <ul>
          <li>
            <em></em>
            <span></span>
          </li>
          <li>
            <em></em>
            <span></span>
          </li>
          <li>
            <em></em>
            <span></span>
          </li>
          <li>
            <em></em>
            <span></span>
          </li>
          <li>
            <em></em>
            <span></span>
          </li>
        </ul>
      </div>
    ) : <p>There is not data available</p>
  );
}