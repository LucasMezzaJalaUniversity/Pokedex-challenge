export const Input = ({type, value, inputRef, onChange, placeholder = ''}) => {
  return (
    <input type={type} value={value} ref={inputRef} onChange={onChange} placeholder={placeholder} style={{border: 'none', outline: 'none',
      width: '100%', padding: '.25em'}} />
  )
}