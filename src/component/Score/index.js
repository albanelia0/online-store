import "./index.scss"

const MAXIMUM_UNITS = 5

const STARS = {
  1: `<img className="score__star" src="/img/estrella.svg" alt="estrella"/>`,
  2: `<img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>`,
  3: `<img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>`,
  4: `<img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>`,
  5: `<img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>
  <img className="score__star" src="/img/estrella.svg" alt="estrella"/>`
}
const Score = ({units}) => {

  return (
    <div className="score">
    {units <= MAXIMUM_UNITS && (
      <div className="score__container" dangerouslySetInnerHTML={{__html: STARS[`${units}`]}}></div>
    )}
    </div>
  )
}

export default Score
