import { useCallback, useContext } from "react";
import { Image } from "../atoms/Image"
import { Input } from "../atoms/Input"
import { debounce } from "../../utils/debounce";
import { PokemonContext } from "../../contexts/PokemonContext";

export const Searcher = () => {
  const {setPokemons, listRef, setLoading} = useContext(PokemonContext);

  const debounceSearch = useCallback(
    debounce((value) => {
      const filtered = listRef.current.filter(row => row.name.includes(value));
      setPokemons(filtered)
    }, 1000),
  []);  

  const handleChange = (e) => {
    setLoading(true)
    debounceSearch(e.target.value);
    setLoading(false)
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '.5em', borderRadius: '8px', width: '50%',
    boxShadow: '0px 4px 4px 0px #00000040', marginTop: '1em'}}>
      <Image src={'/icons/Searcher.svg'} alt={'searcher'} classname={'search-icon'}></Image>
      <Input placeholder={'What Pokémon are you looking for?'} onChange={handleChange}></Input>
    </div>
  )
}