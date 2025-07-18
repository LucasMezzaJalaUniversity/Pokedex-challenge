import { SearcherSection } from '../organisms/SearcherSection'
import { PokemonCard } from '../organisms/PokemonCard'
import './Home.css'
import { useEffect, useRef, useState } from 'react'
import { getRequestFromAPI } from '../../api/api'
import { PokemonContext } from '../../contexts/PokemonContext'
import { Loading } from '../molecules/Loading'
import { EmptyState } from '../molecules/EmptyState'
import { useLoaderData } from 'react-router'

export const Home = () => {
  const pokemonsDetail = useLoaderData();
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const offsetRef = useRef(20);
  const listRef = useRef([]);

  const loadPokemons = async () => {
    if (loading) return;

    setLoading(true)
    const limit = offsetRef.current === 0 ? 20 : 25; 
    const data = await getRequestFromAPI(`https://pokeapi.co/api/v2/pokemon?offset=${offsetRef.current}&limit=${limit}`);
    const pokemonsUrl = data.results.map(row => getRequestFromAPI(row.url))
    const pokemonsDetail = await Promise.all(pokemonsUrl)

    offsetRef.current += limit;

    setPokemons(prev => [...prev, ...pokemonsDetail])
    listRef.current = [...listRef.current, ...pokemonsDetail];
    setLoading(false);
  }

  useEffect(() => {
    loadPokemons();
  }, [])

  useEffect(() => {
    if (pokemonsDetail) {
      setPokemons(pokemonsDetail);
      listRef.current = pokemonsDetail;
    }
  }, [pokemonsDetail]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if(bottom) loadPokemons();
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <PokemonContext.Provider value={{pokemons, setPokemons, listRef, loading, setLoading}}>
      <section className='home'>
        <div className='header'>
          <SearcherSection></SearcherSection>
        </div>
        <div className='pokemons-board'>
          {
            pokemons.length == 0 ? 
              loading ? 
                <Loading />
              :
                <EmptyState text={'Pokemons not found'} />
            : (
              <>
                <div className='pokemons'>
                  {pokemons.map((row, idx) => (
                    <PokemonCard pokemon={row} key={idx}/>
                  ))}
                </div>
                <Loading />
              </>
            )
          }
        </div>
      </section>
    </PokemonContext.Provider>
  )
}