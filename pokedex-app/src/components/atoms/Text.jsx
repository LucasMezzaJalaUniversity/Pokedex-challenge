import './Text.css'

export const Text = ({children, classname = ''}) => {
  return (
    <p className={`${classname}`} >{children}</p>
  )
}