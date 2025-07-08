import { SearcherSection } from '../organisms/SearcherSection'
import { PokemonCard } from '../organisms/PokemonCard'
import './Home.css'
import { useEffect, useRef, useState } from 'react'
import { getRequestFromAPI } from '../../api/api'
import { PokemonContext } from '../../contexts/PokemonContext'
import { Loading } from '../atoms/Loading'

export const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const offsetRef = useRef(0);
  const listRef = useRef([]);

  useEffect(() => {
    setLoading(true)
    const loadPokemons = async () => {
      const limit = offsetRef.current === 0 ? 20 : 25; 
      const data = await getRequestFromAPI(`https://pokeapi.co/api/v2/pokemon?offset=${offsetRef.current}&limit=${limit}`);
      const pokemonsUrl = data.results.map(row => getRequestFromAPI(row.url))
      const pokemonsDetail = await Promise.all(pokemonsUrl)

      offsetRef.current += limit;
      console.log(pokemonsDetail)

      setPokemons(prev => [...prev, ...pokemonsDetail])
      listRef.current = [...listRef.current, ...pokemonsDetail]
    }

    loadPokemons();
    setLoading(false);
  }, [])

  return (
    <PokemonContext.Provider value={{pokemons, setPokemons, listRef, loading, setLoading}}>
      <section className='home'>
        <div className='header'>
          <SearcherSection></SearcherSection>
        </div>
        <div className='pokemons-board'>
          {loading ? 
            <Loading />
          : (
            <div className='pokemons'>
              {pokemons.map((row, idx) => (
                <PokemonCard pokemon={row} key={idx}/>
              ))}
            </div>
          )}
        </div>
      </section>
    </PokemonContext.Provider>
  )
}