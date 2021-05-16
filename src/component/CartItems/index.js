import './index.scss'

const CartItems = ({ allItems, handleToDeleteItem }) => {
  return (
    <div className='cart-products'>
      <h3 className='cart-products__title'>CARRITO</h3>
      <div className='cart-products__line' />
      <div className='cart-products__container'>
        {allItems.map(({ image, price, title, id }) => {
          return (
            <div key={id} className='cart-products__content'>
              <img className='cart-products__img' alt='product' src={image} />
              <span>{title}</span>
              <span>{price}</span>
              <button onClick={() => handleToDeleteItem(id)} className='cart-products__button'>🗑</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CartItems
