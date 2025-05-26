import { Image } from "../atoms/Image"
import { CategoryTag } from "../molecules/CategoryTag"
import { PokemonIdentity } from "../molecules/PokemonIdentity"
import './PokemonCard.css'

export const PokemonCard = ({pokemon}) => {
  const {image, categories, number, name} = pokemon;

  return (
    <div className="pokemon-card">
      <div>
        <PokemonIdentity number={number} name={name} ></PokemonIdentity>
        <ul className="categories-tags">
          {categories.map((row,idx) => (
            <CategoryTag src={row.image} category={row.category} id={idx}></CategoryTag>
          ))}
        </ul>
      </div>
      <Image src={image} alt={name} classname={'pokemon-img'} ></Image>     
    </div>
  )
}