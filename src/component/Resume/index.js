import './index.scss'

const Resume = ({ count = 0, price = 0 }) => {
  return (
    <div className='cart-resume'>
      <div className='cart-resume__price-container'>
        <span className='cart-resume__text'>{count} {count > 1 ? 'artículos' : 'artículo'}</span>
        <span>{price}</span>
      </div>
      <div className='cart-resume__line' />
      <button disabled className='cart-resume__button'>FINALIZAR COMPRA</button>
    </div>
  )
}

export default Resume
