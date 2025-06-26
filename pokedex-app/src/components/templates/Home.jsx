import { SearcherSection } from '../organisms/SearcherSection'
import { PokemonCard } from '../organisms/PokemonCard'
import './Home.css'

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

export const Home = () => {
  return (
    <article className='home'>
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
    </article>
  )
}