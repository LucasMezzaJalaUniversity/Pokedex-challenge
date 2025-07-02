import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"

export const Languages = () => {
  return (
    <div style={{backgroundColor: ''}}>
      <Text>Select a language</Text>
      <ul>
        <li><Image src={"/images/japan.svg"} alt={"japan"}></Image></li>
        <li><Image src={"/images/korea.svg"} alt={"korea"}></Image></li>
        <li><Image src={"/images/usa.svg"} alt={"usa"}></Image></li>
        <li><Image src={"/images/spain.svg"} alt={"spain"}></Image></li>
      </ul>
    </div>
  )
}