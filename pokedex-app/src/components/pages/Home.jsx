import { SearcherSection } from '../organisms/SearcherSection'
import { PokemonCard } from '../organisms/PokemonCard'
import './Home.css'
import { useContext, useEffect, useRef } from 'react'
import { getRequestFromAPI } from '../../api/api'
import { PokemonContext } from '../../contexts/PokemonContext'
import { Loading } from '../molecules/Loading'
import { EmptyState } from '../molecules/EmptyState'

export const Home = () => {
  const { pokemons, setPokemons, listRef, loading, setLoading } = useContext(PokemonContext);
  const offsetRef = useRef(0);

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
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= (document.body.offsetHeight - 100);
      if(bottom && !loading) loadPokemons();
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
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
              {loading && <Loading />}
            </>
          )
        }
      </div>
    </section>
  )
}