import './App.css'
import { Navbar } from './components/organisms/Navbar'
import { PokemonCard } from './components/organisms/PokemonCard'
import { SearcherSection } from './components/organisms/SearcherSection'

function App() {
  const pokemon = {
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 
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

  return (
    <section>
      <Navbar></Navbar>
      <SearcherSection></SearcherSection>
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
