import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import './TypeTags.css'

export const TypeTags = ({types}) => {
  const categoriesColors = {
    Grass: 'green',
    Poison: 'purple',
  }

  return (
    <ul className="categories-tags">
      {types.map((row,idx) => (
        <li key={idx} className={`category-tag category-${categoriesColors[row.category]}`}>
          <Image src={`/icons/${row.image}`} alt={row.category} classname={'category-icon'} ></Image>
          <Text classname={'pokemon-category'} >{row.category}</Text>
        </li>
      ))}
    </ul>
  )
}