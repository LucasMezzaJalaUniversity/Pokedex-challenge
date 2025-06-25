import './Button.css'

export const Button = ({children, onClick, classname}) => {
  return (
    <button onClick={onClick} className={classname}>{children}</button>
  )
}