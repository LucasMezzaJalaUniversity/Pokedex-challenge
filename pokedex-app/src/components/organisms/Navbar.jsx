import { PokemonLogo } from "../molecules/PokemonLogo"
import { NavbarLinks } from "../molecules/NavbarLinks"
import { Link } from "react-router"

export const Navbar = () => {
  return (
    <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.5em 8em', 
      boxShadow: '0px 4px 4px 0px #00000040', zIndex: '1', position: 'relative'}}>
      <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
        <PokemonLogo />
      </Link>
      <NavbarLinks></NavbarLinks>
    </header>
  )
}