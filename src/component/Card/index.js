import "./index.scss"

const Card = ({title, price, imgSrc}) => {
  return (
    <div className="card">
      <img alt="card" className="card__img" src={imgSrc} />
      <span className="card__title">{title}</span>
      <span className="card__price">{price}</span>
    </div>
  )
}

export default Card
