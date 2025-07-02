import { Button } from "../atoms/Button"
import { Image } from "../atoms/Image"
import { Languages } from "../molecules/Languages"
import './Game.css'

export const Game = () => {
  return (
    <section className='game'>
      <div className='header'>
        <Languages></Languages>
      </div>
      <div className="gameboard">
        <div>
          <Image src={'/icons/hiddenPokemon.svg'}></Image>
          <ul>
            <li><Button classname={'game-btn'}>Pikachu</Button></li>
            <li><Button classname={'game-btn'}>Charizard</Button></li>
            <li><Button classname={'game-btn'}>Gengar</Button></li>
            <li><Button classname={'game-btn'}>Articuno</Button></li>
          </ul>
        </div>
      </div>
    </section>
  )
}