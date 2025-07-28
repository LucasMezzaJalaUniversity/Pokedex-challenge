import { SearcherSection } from '../organisms/SearcherSection'
import { PokemonCard } from '../organisms/PokemonCard'
import './Home.css'
import { useContext, useEffect, useRef } from 'react'
import { getRequestFromAPI } from '../../api/api'
import { PokemonContext } from '../../contexts/PokemonContext'
import { Loading } from '../molecules/Loading'
import { EmptyState } from '../molecules/EmptyState'

const Home = () => {
  const { pokemons, setPokemons, listRef, loading, setLoading } = useContext(PokemonContext);
  const offsetRef = useRef(0);
  const limitRef = useRef(20);
  const scrollLock = useRef(false);

  const loadPokemons = async () => {
    if (loading || scrollLock.current) return;

    scrollLock.current = true;
    setLoading(true);

    const data = await getRequestFromAPI(`https://pokeapi.co/api/v2/pokemon?offset=${offsetRef.current}&limit=${limitRef.current}`);
    const pokemonsUrl = data.results.map(row => getRequestFromAPI(row.url))
    const pokemonsDetail = await Promise.all(pokemonsUrl)

    offsetRef.current += limitRef.current;

    setPokemons(prev => [...prev, ...pokemonsDetail])
    listRef.current = [...listRef.current, ...pokemonsDetail];
    
    setLoading(false);
    scrollLock.current = false;
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

  const handleLimit = (e) => {
    const limit = Number(e.target.value);
    limitRef.current = limit;
  }

  return (
    <section className='home'>
      <div className='header'>
        <SearcherSection></SearcherSection>
      </div>
      <div className='pokemons-board'>
        <div className='options'>
          <div>
            <label htmlFor='limit'>Pokemons per load:</label>
            <input type="number" id='limit' min={1} defaultValue={20} onChange={handleLimit} />
          </div>
        </div>
        {
          pokemons.length == 0 ? 
            loading ? 
              <Loading />
            :
              <EmptyState text={'Pokemons not found'} />
          : (
            <>
              <div style={{ marginLeft: "1em"}}>
                <span>{pokemons.length} pokemons loaded</span>
              </div>
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

export default Home;