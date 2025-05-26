import { Text } from "../atoms/Text"
import './PokemonIdentity.css'

export const PokemonIdentity = ({number, name}) => {
  return (
    <div className="pokemon-identity">
      <Text classname={'pokemon-id'} >#{number}</Text>
      <Text classname={'pokemon-name'} >{name}</Text>
    </div>
  )
}