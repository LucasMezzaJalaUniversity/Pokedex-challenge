import { Image } from '../atoms/Image';
import { Text } from '../atoms/Text';
import './Loading.css';

export const Loading = () => {
  return (
    <div className="loading-container">
      <Image src={'icons/Logo.svg'} alt={"pokeball"}></Image>
      <Text>Loading...</Text>
    </div>
  )
}