import { useContext, useEffect, useRef, useState } from "react"
import { PokemonContext } from "../../contexts/PokemonContext"
import { Button } from "../atoms/Button"
import { Image } from "../atoms/Image"
import { Languages } from "../molecules/Languages"
import './Game.css'

export const Game = () => {
  const { listRef } = useContext(PokemonContext);
  const gameList = useRef([]);
  const [score, setScore] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  useEffect(() => {
    if (!listRef?.current || listRef.current.length < 4) return;

    let random;
    for(let i = 0; i < 4; i++) {
      random = Math.floor(Math.random() * listRef.current.length)
      gameList.current[i] = listRef.current[random];
    }

    const selected = Math.floor(Math.random() * 4)
    setSelectedPokemon(gameList.current[selected])
  }, [score, listRef?.current])

  const handleAnswer = (pokemonName) => {
    if(pokemonName === selectedPokemon.name) {
      setScore(prev => prev + 10);
    }
  }

  return (
    <section className='game'>
      <div className='header'>
        <Languages></Languages>
      </div>
      <div className="gameboard">
        <div>
          <Image src={selectedPokemon.sprites.front_default} classname={"hidden-pokemon"}></Image>
          <ul>
            {gameList.current.map((row, idx) => {
              <li key={idx}><Button classname={'game-btn'} onClick={() => handleAnswer(row.name)}>{row.name}</Button></li>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}