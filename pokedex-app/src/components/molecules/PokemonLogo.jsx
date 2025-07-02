import { Button } from "../atoms/Button"
import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"

export const PokemonLogo = ({handlePage}) => {
  return (
    <Button 
      onClick={e => handlePage('game')}
      classname={'logo'}
    >
      <Image src={`/icons/Logo.svg`} alt={'logo'} classname={'logo-icon'}></Image>
      <Text>Pokemon</Text>
    </Button>
  )
}