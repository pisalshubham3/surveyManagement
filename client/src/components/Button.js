const Button = (props) => {
  const { title, onClick, className } = props
  return (
    // <div className='mb-3 inline-block'>
    <button
      style={{ width: 'auto', margin: '20px' }}
      className={className ? className : 'btn btn-primary'}
      onClick={onClick}>
      {title}
    </button>
    // </div>
  )
}

export default Button
