import { Image } from "../atoms/Image"
import { TypeTags } from "../molecules/TypeTags"
import { PokemonIdentity } from "../molecules/PokemonIdentity"
import './PokemonCard.css'

export const PokemonCard = ({pokemon}) => {
  const {id, sprites, types, name} = pokemon;

  const categoriesColors = {
    grass: 'green',
    poison: 'purple',
    fire: 'orange',
    bug: 'dark-green',
    water: 'blue',
    normal: 'gray',
    electric: 'yellow',
    ground: 'dark-orange',
    rock: 'dark-gray',
    fairy: 'pink',
  }

  return (
    <div className={`pokemon-card card-color-${categoriesColors[types[0].type.name]}`}>
      <Image src={`/icons/Pattern.svg`} alt={'Pattern'} classname={'pattern-card'} ></Image>     
      <div>
        <PokemonIdentity number={id} name={name} ></PokemonIdentity>
        <TypeTags types={types}></TypeTags>
      </div>
      <Image src={sprites.front_default} alt={name} classname={'pokemon-img'} ></Image>
      <Image src={`/icons/Pokeball.svg`} alt={'Pokeball'} classname={'pokeball-img'} ></Image>
    </div>
  )
}