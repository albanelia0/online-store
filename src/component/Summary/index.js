import './index.scss'

const Summary = ({ count = 0, price = 0 }) => {
  return (
    <div className='cart-summary'>
      <div className='cart-summary__price-container'>
        <span className='cart-summary__text'>{count} {count > 1 ? 'artículos' : 'artículo'}</span>
        <span>{price.toFixed(2)}</span>
      </div>
      <div className='cart-summary__line' />
      <button disabled className='cart-summary__button'>FINALIZAR COMPRA</button>
    </div>
  )
}

export default Summary
