import { SearcherSection } from '../organisms/SearcherSection'
import { PokemonCard } from '../organisms/PokemonCard'
import './Home.css'
import { useEffect, useState } from 'react'
import { getRequestFromAPI } from '../../api/api'

export const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await getRequestFromAPI('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
      const pokemonsUrl = data.results.map(row => getRequestFromAPI(row.url))
      const pokemonsDetail = await Promise.all(pokemonsUrl)

      console.log(pokemonsDetail)

      setPokemons(pokemonsDetail)
    }

    loadPokemons();
  }, [])

  return (
    <section className='home'>
      <div className='header'>
        <SearcherSection></SearcherSection>
      </div>
      <div className='pokemons'>
        {pokemons.map((row, idx) => (
          <PokemonCard pokemon={row} key={idx}/>
        ))}
      </div>
    </section>
  )
}