import { Image } from "../atoms/Image"
import { CategoryTag } from "../molecules/CategoryTag"
import { PokemonIdentity } from "../molecules/PokemonIdentity"

export const PokemonCard = ({pokemon}) => {
  const {src, categories, number, name} = pokemon;

  return (
    <div>
      <div>
        <PokemonIdentity number={number} name={name} ></PokemonIdentity>
        <ul>
          {categories.map((row,idx) => (
            <CategoryTag src={row.src} category={row.category} id={idx}></CategoryTag>
          ))}
        </ul>
      </div>
      <Image src={src} alt={name} classname={''} ></Image>     
    </div>
  )
}