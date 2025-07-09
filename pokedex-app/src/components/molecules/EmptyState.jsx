import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"

export const EmptyState = ({text}) => {
  return (
    <div style={{display: 'flex', alignItems: "center", flexDirection: "column", marginTop: "2em"}}>
      <Image src={'icons/Logo.svg'} alt={"pokeball"}></Image>
      <Text>{text}</Text>
    </div>
  )
}