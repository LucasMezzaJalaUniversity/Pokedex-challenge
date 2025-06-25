import { Text } from "../atoms/Text"
import { Button } from "../atoms/Button"
import { PokemonLogo } from "../molecules/PokemonLogo"

export const Navbar = ({handlePage, page}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.5em 8em', 
      boxShadow: '0px 4px 4px 0px #00000040', zIndex: '1', position: 'relative'}}>
      <PokemonLogo></PokemonLogo>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em'}}>
        <Button onClick={e => handlePage('home')} classname={'navlink'}>
          <Text classname={`${page === 'home' ? 'current-page' : ''} navlink`}>Home</Text>
        </Button>
        <Button onClick={e => handlePage('types')} classname={'navlink'}>
          <Text classname={`${page === 'types' ? 'current-page' : ''} navlink`}>Types</Text>
        </Button>
        <Button onClick={e => handlePage('generations')} classname={'navlink'}>
          <Text classname={`${page === 'generations' ? 'current-page' : ''} navlink`}>Generations</Text>
        </Button>
      </div>
    </div>
  )
}