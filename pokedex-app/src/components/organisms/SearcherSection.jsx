import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import { Searcher } from "../molecules/Searcher"

export const SearcherSection = () => {
  return (
    <header>
      <Image src={`/icons/Pattern-searcher.svg`} alt={'patter'} classname={'category-icon'}></Image>
      <Image src={`/icons/Pattern-searcher.svg`} alt={'patter'} classname={'category-icon'}></Image>
      <Searcher></Searcher>
      <Text>Search for Pokémon by name or using the National Pokédex number.</Text>
    </header>
  )
}