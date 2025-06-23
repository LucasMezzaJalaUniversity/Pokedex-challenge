import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import { Searcher } from "../molecules/Searcher"

export const SearcherSection = () => {
  return (
    <div style={{backgroundColor: '#EA5D60', padding: '2em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
      flexDirection: 'column', position: 'relative'}}>
      <Image src={`/icons/Pattern-searcher.svg`} alt={'patter'} classname={"patter-searcher left"}></Image>
      <Image src={`/icons/Pattern-searcher.svg`} alt={'patter'} classname={"patter-searcher right"}></Image>
      <Searcher></Searcher>
      <Text classname={"searcher"}>Search for Pokémon by name or using the National Pokédex number.</Text>
    </div>
  )
}