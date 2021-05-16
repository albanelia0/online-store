import './index.scss'

const MAXIMUM_UNITS = 5

const Score = ({ units }) => {
  const stars = new Array(units)
    .fill()
    .map((_, index) => (
      <img key={index} className='score__star' src='/img/estrella.svg' alt='estrella' />
    ))

  return (
    <div className='score'>
      {units <= MAXIMUM_UNITS && (
        <div className='score__container'>
          {stars}
        </div>
      )}
    </div>
  )
}

export default Score
