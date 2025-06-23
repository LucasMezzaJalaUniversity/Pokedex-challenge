export const Input = ({type, value, inputRef, onChange, placeholder = ''}) => {
  return (
    <input type={type} value={value} ref={inputRef} onChange={onChange} placeholder={placeholder}/>
  )
}