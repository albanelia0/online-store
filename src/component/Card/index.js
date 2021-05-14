import "./index.scss"

const Card = ({title, price, imgSrc}) => {
  return (
    <div className="card">
      <img alt="card" className="card__img" src={imgSrc} />
      <span className="card__title">{title}</span>
      <span className="card__price">{price}</span>
      <div className="cart-wrapper">
        <button className="cart-wrapper__button-img cart-wrapper__button-style">
          <img className="cart-wrapper__img" alt="carrito" src="/img/carrito.svg" />
        </button>
        <button className="cart-wrapper__button-eyes cart-wrapper__button-style">
          <img className="cart-wrapper__eyes" alt="ojo" src="/img/ojo.svg" />
        </button>
      </div>
    </div>
  )
}

export default Card
