import { Text } from "../atoms/Text"
import './PokemonIdentity.css'

export const PokemonIdentity = ({number, name, color = "white", classname = ""}) => {
  return (
    <div className={`pokemon-identity ${classname}`}>
      <Text classname={`pokemon-id color-${color}`} >#{number.toString().padStart(3, "0")}</Text>
      <Text classname={`pokemon-name color-${color}`} >{name}</Text>
    </div>
  )
}