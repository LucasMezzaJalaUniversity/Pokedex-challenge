import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"

export const PokemonLogo = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <Image src={`/icons/Logo.svg`} alt={'logo'} classname={'logo-icon'}></Image>
      <Text>Pokemon</Text>
    </div>
  )
}