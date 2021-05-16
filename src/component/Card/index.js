import Score from '../Score'
import './index.scss'

const Card = ({ title, price, imgSrc, handleToAddItemToCart }) => {
  return (
    <div className='card'>
      <div className='card__img-container'>
        <img alt='card' className='card__img' src={imgSrc} />
        <div className='card__star'>
          <Score units={3} />
        </div>
      </div>
      <span className='card__title'>{title}</span>
      <span className='card__price'>{price}</span>
      <div className='cart-wrapper'>
        <button onClick={handleToAddItemToCart} className='cart-wrapper__button-img cart-wrapper--button-style'>
          <img className='cart-wrapper__img' alt='carrito' src='/img/carrito.svg' />
        </button>
        <button className='cart-wrapper__button-eyes cart-wrapper--button-style'>
          <img className='cart-wrapper__eyes' alt='ojo' src='/img/ojo.svg' />
        </button>
      </div>
    </div>
  )
}

export default Card
