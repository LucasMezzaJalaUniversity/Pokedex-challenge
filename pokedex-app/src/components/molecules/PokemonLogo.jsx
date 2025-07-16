import { NavLink } from "react-router"
import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"

export const PokemonLogo = () => {
  return (
    <NavLink  
      to="/game"
      style={{textDecoration: 'none', color: 'inherit', display: "flex", alignItems: "center"}}
    >
      <Image src={`/icons/Logo.svg`} alt={'logo'} classname={'logo-icon'}></Image>
      <Text>Pokemon</Text>
    </NavLink>
  )
}