import { useContext } from "react";
import { DetailPokemonContext } from "../../contexts/DetailPokemonContext";
import './Data.css'

export const Data = () => {
  const { detailPokemon } = useContext(DetailPokemonContext);

  function format(input) {
    const str = input.toString().padStart(2, '0');
    return str.split('').join('.');
  }
  
  return (
    (!detailPokemon || Object.values(detailPokemon).length === 0) ? 
      <p>There is not data available</p> : (
      <div className="data">
        <h3>About this Pokemon:</h3>
        <p></p>
        <ul>
          <li>
            <em>Species</em>
            <span></span>
          </li>
          <li>
            <em>Height</em>
            <span>{format(detailPokemon.height)}m</span>
          </li>
          <li>
            <em>Weight</em>
            <span>{format(detailPokemon.weight)}kg</span>
          </li>
          <li>
            <em>Abilities</em>
            {detailPokemon.abilities.length > 0 ? (
              <ul>
                {detailPokemon.abilities.map((row, idx) => (
                  <li key={idx}>
                    <span>{row.ability.name} {row.is_hidden ? " (hidden ability)" : ""}</span>
                  </li>
                ))}
              </ul>
            ) : <span></span>}
          </li>
          <li>
            <em>Weaknesses</em>
            <span></span>
          </li>
        </ul>
      </div>
    )
  );
}