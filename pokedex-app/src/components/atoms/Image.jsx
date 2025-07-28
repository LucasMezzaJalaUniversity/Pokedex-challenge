import './Image.css'

export const Image = ({src, alt = 'image', classname = ''}) => {
  return (
    <img src={src} alt={alt} className={`${classname}`} />
  )
}