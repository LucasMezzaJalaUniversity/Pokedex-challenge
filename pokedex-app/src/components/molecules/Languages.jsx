import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"

export const Languages = () => {
  return (
    <div style={{backgroundColor: '#EA5D60', display: 'flex', alignItems: 'center', padding: '.5em 1.5em'}}>
      <Text classname={"language"}>Select a language</Text>
      <ul style={{display: 'flex', alignItems: 'center', gap: '1em', listStyle: 'none', marginLeft: '2em'}}>
        <li style={{display: 'flex'}}><Image src={"/icons/japan.svg"} alt={"japan"} classname={"flags"}></Image></li>
        <li style={{display: 'flex'}}><Image src={"/icons/korea.svg"} alt={"korea"} classname={"flags"}></Image></li>
        <li style={{display: 'flex'}}><Image src={"/icons/usa.svg"} alt={"usa"} classname={"flags"}></Image></li>
        <li style={{display: 'flex'}}><Image src={"/icons/spain.svg"} alt={"spain"} classname={"flags"}></Image></li>
      </ul>
    </div>
  )
}