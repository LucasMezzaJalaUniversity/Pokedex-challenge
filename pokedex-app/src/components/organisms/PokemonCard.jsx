import { Image } from "../atoms/Image"
import { TypeTag } from "../molecules/TypeTag"
import { PokemonIdentity } from "../molecules/PokemonIdentity"
import './PokemonCard.css'

export const PokemonCard = ({pokemon}) => {
  const {image, types, number, name} = pokemon;

  return (
    <div className="pokemon-card">
      <div>
        <PokemonIdentity number={number} name={name} ></PokemonIdentity>
        <ul className="categories-tags">
          {types.map((row,idx) => (
            <TypeTag src={row.image} category={row.category} id={idx}></TypeTag>
          ))}
        </ul>
      </div>
      <Image src={image} alt={name} classname={'pokemon-img'} ></Image>     
    </div>
  )
}