import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"

export const categoryTag = ({src, category}) => {
  return (
    <li>
      <Image src={src} alt={category} classname={''} ></Image>
      <Text classname={''} >{category}</Text>
    </li>
  )
}