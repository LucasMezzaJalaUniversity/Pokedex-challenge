export const Image = ({src, alt = '', classname = ''}) => {
  return (
    <img src={src} alt={alt} className={`${classname}`} />
  )
}