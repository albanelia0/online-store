import "./index.scss"

const CartItems = ({allItems}) => {
  return (
    <div className="cart-products">
      <h3 className="cart-products__title">CARRITO</h3>
      <div className="cart-products__line"/>
      <div className="cart-products__container">
        {allItems.map(({image, price, title}) => {
          return (
            <div className="cart-products__content">
              <img className="cart-products__img" alt="product" src={image}/>
              <span>{title}</span>
              <span>{price}</span>
              <button className="cart-products__button">🗑</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CartItems
