import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import './TypeTag.css'

export const TypeTag = ({id, src, category}) => {
  const categoriesColors = {
    Grass: 'green',
    Poison: 'purple',
  }

  return (
    <li key={id} className={`category-tag category-${categoriesColors[category]}`}>
      <Image src={`/icons/${src}`} alt={category} classname={'category-icon'} ></Image>
      <Text classname={'pokemon-category'} >{category}</Text>
    </li>
  )
}