import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import './TypeTags.css'

export const TypeTags = ({types = [], text = true}) => {
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
    dragon: 'dark-blue',
    ghost: 'violet',
    dark: 'dark',
    ice: 'light-blue-2',
    steel: 'dark-blue-2',
    psychic: 'dark-pink',
    fighting: 'dark-pink-2',
  }

  return (
    <ul className="categories-tags">
      {types.map((row,idx) => (
        <li key={idx} className={`${text ? 'category-tag' : 'category-tags-icon'} category-${categoriesColors[row.type.name]}`}>
          <Image src={`/icons/${row.type.name}.svg`} alt={'type'} classname={`${text ? 'category-icon-text' : 'category-icon'}`} ></Image>
          {text && <Text classname={'pokemon-category'} >{row.type.name}</Text>}
        </li>
      ))}
    </ul>
  )
}