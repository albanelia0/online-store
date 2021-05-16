import { useHistory } from 'react-router-dom'

import './index.scss'

const Cart = ({ count = 0, value = '0,0' }) => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/cesta')
  }
  return (
    <div className='cart' onClick={handleOnClick}>
      <div className='cart__containerImg'>
        <img className='cart__img' src='/img/carrito.svg' alt='carrito' />
        <span className='cart__count'>{count}</span>
      </div>
      <div className='cart__containerTitle'>
        <span className='cart__price'>{value}</span>
        <span className='cart__title'>Mi carrito </span>
      </div>
    </div>
  )
}

export default Cart
