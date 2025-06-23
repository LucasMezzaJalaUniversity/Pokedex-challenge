import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"

export const PokemonLogo = () => {
  return (
    <div>
      <Image src={`/icons/Logo.svg`} alt={'logo'} classname={'category-icon'}></Image>
      <Text>Pokemon</Text>
    </div>
  )
}