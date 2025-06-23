import { Image } from "../atoms/Image"
import { Input } from "../atoms/Input"

export const Searcher = () => {
  return (
    <div style={{display: 'flex', alignitems: 'center', backgroundColor: '#fff', padding: '.5em', borderRadius: '8px', width: '50%',
    boxShadow: '0px 4px 4px 0px #00000040', marginTop: '1em'}}>
      <Image src={`/icons/Searcher.svg`} alt={'searcher'} classname={'search-icon'}></Image>
      <Input placeholder={'What Pokémon are you looking for?'}></Input>
    </div>
  )
}