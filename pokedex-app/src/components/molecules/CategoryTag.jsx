import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import './CategoryTag.css'

export const CategoryTag = ({id, src, category}) => {
  const categoriesColors = {
    Grass: 'green',
    Poison: 'purple',
  }

  return (
    <li key={id} className={`category-tag category-${categoriesColors[category]}`}>
      <Image src={src} alt={category} classname={'category-icon'} ></Image>
      <Text classname={'pokemon-category'} >{category}</Text>
    </li>
  )
}