import { Text } from "../atoms/Text"
import { PokemonLogo } from "../molecules/PokemonLogo"

export const Navbar = () => {
  return (
    <nav>
      <PokemonLogo></PokemonLogo>
      <div>
        <Text>Home</Text>
        <Text>Types</Text>
        <Text>Generations</Text>
      </div>
    </nav>
  )
}