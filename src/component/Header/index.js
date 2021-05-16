import { useContext } from 'react'
import { Context } from '../../CartStoreContext'
import Cart from '../Cart'
import { useHistory } from 'react-router-dom'
import Layout from '../Layout'

import './index.scss'

const Header = () => {
  const { itemsAdded, handleToSumTotalPrice } = useContext(Context)

  const history = useHistory()
  const totalPrice = handleToSumTotalPrice()

  const handleOnLogoClick = () => {
    history.push('/')
  }
  return (
    <div className='header__container'>
      <Layout>
        <div className='header'>
          <img
            onClick={handleOnLogoClick}
            alt='patterson-agency-logo'
            className='header__img'
            src='/img/patterson-agency-logo.png'
          />
          <Cart count={itemsAdded.count} value={totalPrice.toFixed(2)} />
        </div>
      </Layout>
      <div className='header__line' />
    </div>
  )
}

export default Header
