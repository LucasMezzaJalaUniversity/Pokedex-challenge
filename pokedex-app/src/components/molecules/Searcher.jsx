import { Image } from "../atoms/Image"
import { Input } from "../atoms/Input"

export const Searcher = () => {
  return (
    <div>
      <Image src={`/icons/Searcher.svg`} alt={'searcher'} classname={'category-icon'}></Image>
      <Input placeholder={'What Pokémon are you looking for?'}></Input>
    </div>
  )
}