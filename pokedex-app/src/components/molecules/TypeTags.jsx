import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import './TypeTags.css'

export const TypeTags = ({types}) => {
  const categoriesColors = {
    grass: 'green',
    poison: 'purple',
    fire: 'orange',
    bug: 'dark-green',
    water: 'blue',
    normal: 'gray',
    flying: 'light-blue',
    electric: 'yellow',
    ground: 'dark-orange',
    rock: 'dark-gray',
    fairy: 'pink',
    dragon: 'blue',
    ghost: 'gray',
    dark: 'light-blue',
    ice: 'yellow',
    steel: 'dark-orange',
    psychic: 'dark-gray',
    fighting: 'pink',
  }

  return (
    <ul className="categories-tags">
      {types.map((row,idx) => (
        <li key={idx} className={`category-tag category-${categoriesColors[row.type.name]}`}>
          <Image src={`/icons/${row.type.name}.svg`} alt={row.type.name} classname={'category-icon'} ></Image>
          <Text classname={'pokemon-category'} >{row.type.name}</Text>
        </li>
      ))}
    </ul>
  )
}