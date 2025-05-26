import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"

export const CategoryTag = ({id, src, category}) => {
  return (
    <li key={id}>
      <Image src={src} alt={category} classname={''} ></Image>
      <Text classname={''} >{category}</Text>
    </li>
  )
}