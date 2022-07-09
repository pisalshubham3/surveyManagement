const Input = (props) => {
  const { title, type, className, onChange, maxLength } = props
  return (
    <div className='mb-3'>
      <label>{title}</label>
      <input
        maxLength={maxLength}
        className={className ? className : 'form-control'}
        type={type ? type : 'text'}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
