import { Text } from "../atoms/Text"

export const PokemonIdentity = ({number, name}) => {
  return (
    <div>
      <Text classname={''} >#{number}</Text>
      <Text classname={''} >{name}</Text>
    </div>
  )
}