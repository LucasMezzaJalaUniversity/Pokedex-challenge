import { useState } from 'react'
import './App.css'
import { Navbar } from './components/organisms/Navbar'
import { PokemonCard } from './components/organisms/PokemonCard'
import { SearcherSection } from './components/organisms/SearcherSection'

function App() {
  const pokemon = {
    image: '/images/Bullbasaur.png', 
    types: [
      {
        image: "grass.svg",
        category: 'Grass'
      },
      {
        image: "poison.svg",
        category: 'Poison'
      }
    ], 
    number: '001', 
    name: 'Bulbasaur'
  }

  const [page, setPage] = useState('home')
  const handlePage = (currentPage) => {
    setPage(currentPage)
  }

  return (
    <section className='body-section'>
      <nav>
        <Navbar handlePage={handlePage} page={page}></Navbar>
      </nav>
      <header>
        <SearcherSection></SearcherSection>
      </header>
      <div className='pokemons'>
        <PokemonCard pokemon={pokemon} />
        <PokemonCard pokemon={pokemon} />
        <PokemonCard pokemon={pokemon} />
        <PokemonCard pokemon={pokemon} />
        <PokemonCard pokemon={pokemon} />
        <PokemonCard pokemon={pokemon} />
        <PokemonCard pokemon={pokemon} />
        <PokemonCard pokemon={pokemon} />
        <PokemonCard pokemon={pokemon} />
      </div>
    </section>
  )
}

export default App
