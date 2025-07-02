import { PokemonLogo } from "../molecules/PokemonLogo"
import { NavbarLinks } from "../molecules/NavbarLinks"

export const Navbar = ({handlePage, page}) => {
  return (
    <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.5em 8em', 
      boxShadow: '0px 4px 4px 0px #00000040', zIndex: '1', position: 'relative'}}>
      <PokemonLogo></PokemonLogo>
      <NavbarLinks handlePage={handlePage} page={page}></NavbarLinks>
    </header>
  )
}