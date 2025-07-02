export const NavbarLinks = ({page, handlePage}) => {
  return (
    <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em'}}>
      {page === 'game' || page === 'langs' ?
        <>
          <Button onClick={e => handlePage('game')} classname={'navlink'}>
            <Text classname={`${page === 'game' ? 'current-page' : ''} navlink`}>Game</Text>
          </Button>
          <Button onClick={e => handlePage('langs')} classname={'navlink'}>
            <Text classname={`${page === 'langs' ? 'current-page' : ''} navlink`}>Langs</Text>
          </Button>
          <Button onClick={e => handlePage('home')} classname={'navlink'}>
            <Text classname="navlink">Pokedex</Text>
          </Button>
        </>
      : <>
        <Button onClick={e => handlePage('home')} classname={'navlink'}>
          <Text classname={`${page === 'home' ? 'current-page' : ''} navlink`}>Home</Text>
        </Button>
        <Button onClick={e => handlePage('types')} classname={'navlink'}>
          <Text classname={`${page === 'types' ? 'current-page' : ''} navlink`}>Types</Text>
        </Button>
        <Button onClick={e => handlePage('generations')} classname={'navlink'}>
          <Text classname={`${page === 'generations' ? 'current-page' : ''} navlink`}>Generations</Text>
        </Button>
      </>}
    </nav>
  )
}