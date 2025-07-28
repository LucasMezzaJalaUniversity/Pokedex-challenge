import { useContext } from "react";
import { DetailPokemonContext } from "../../contexts/DetailPokemonContext";
import './Stats.css'

export const Stats = () => {  
  const { detailPokemon } = useContext(DetailPokemonContext);
  
  return (
    (!detailPokemon || Object.values(detailPokemon).length === 0 || detailPokemon.stats.length === 0) ? 
      <p>There is not stats available</p> : (
      <div className="stat">
        <ul>
          {detailPokemon.stats.map((row, idx) => (
            <li key={idx}>
              <em>{row.stat.name}</em>
              <span>{row.base_stat}</span>
              <div className="container">
                <div style={{ width: `${row.base_stat}%` }} className="stat-bar"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}