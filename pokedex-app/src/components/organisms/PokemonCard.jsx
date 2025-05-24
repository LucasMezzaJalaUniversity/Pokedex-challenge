import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import { CategoryTag } from "../molecules/CategoryTag"

export const PokemonCard = ({src, categories, number, name}) => {
  return (
    <div>
      <div>
        <Text classname={''} >#{number}</Text>
        <Text classname={''} >{name}</Text>
        <ul>
          {categories.map(row => (
            <CategoryTag src={row.src} category={row.category} ></CategoryTag>
          ))}
        </ul>
      </div>
      <Image src={src} alt={name} classname={''} ></Image>     
    </div>
  )
}