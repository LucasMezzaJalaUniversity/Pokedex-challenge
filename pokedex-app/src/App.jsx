import './App.css'
import { PokemonCard } from './components/organisms/PokemonCard'

function App() {
  const pokemon = {
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 
    categories: [
      {
        image: "",
        category: 'Grass'
      },
      {
        image: "",
        category: 'Poison'
      }
    ], 
    number: '001', 
    name: 'Bulbasaur'
  }

  return (
    <>
      <PokemonCard pokemon={pokemon} />
    </>
  )
}

export default App
