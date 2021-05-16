import './index.scss'

const CartItems = ({ allItems, deleteItem }) => {
  return (
    <div className='cart-products'>
      <h3 className='cart-products__title'>CARRITO</h3>
      <div className='cart-products__line' />
      <div className='cart-products__container'>
        {allItems.map(({ image, price, title, id }) => {
          return (
            <div key={id} className='cart-products__content'>
              <img className='cart-products__img' alt='product' src={image} />
              <span className='cart-products__item-title'>{title}</span>
              <span className='cart-products__item-price'>{price}</span>
              <button onClick={() => deleteItem(id)} className='cart-products__button'>🗑</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CartItems
