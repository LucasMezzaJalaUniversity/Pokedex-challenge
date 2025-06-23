import { Image } from "../atoms/Image"
import { TypeTags } from "../molecules/TypeTags"
import { PokemonIdentity } from "../molecules/PokemonIdentity"
import './PokemonCard.css'

export const PokemonCard = ({pokemon}) => {
  const {image, types, number, name} = pokemon;

  return (
    <div className="pokemon-card">
      <Image src={`/icons/Pattern.svg`} alt={'Pattern'} classname={'pattern-card'} ></Image>     
      <div>
        <PokemonIdentity number={number} name={name} ></PokemonIdentity>
        <TypeTags types={types}></TypeTags>
      </div>
      <Image src={image} alt={name} classname={'pokemon-img'} ></Image>
      <Image src={`/icons/Pokeball.svg`} alt={'Pokeball'} classname={'pokeball-img'} ></Image>
    </div>
  )
}