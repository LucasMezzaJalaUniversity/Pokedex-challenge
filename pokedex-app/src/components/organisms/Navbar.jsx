import { Text } from "../atoms/Text"
import { PokemonLogo } from "../molecules/PokemonLogo"

export const Navbar = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1em 8em', boxShadow: '0px 4px 4px 0px #00000040'}}>
      <PokemonLogo></PokemonLogo>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em'}}>
        <Text classname={"navlink"}>Home</Text>
        <Text classname={"navlink"}>Types</Text>
        <Text classname={"navlink"}>Generations</Text>
      </div>
    </div>
  )
}