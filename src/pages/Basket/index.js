import { useContext } from 'react'
import CartItems from '../../component/CartItems'

import { Context } from '../../CartStoreContext'
import Layout from '../../component/Layout'

import './index.scss'
import Summary from '../../component/Summary'
import SimpleForm from '../../component/SimpleForm'

const Basket = () => {
  const { itemsAdded, sumTotalPrice, deleteItem } = useContext(Context)

  const totalPrice = sumTotalPrice()

  return (
    <Layout>
      <div className='cart-wrapper'>
        <CartItems deleteItem={deleteItem} allItems={itemsAdded.items} />
        <div className='cart-wrapper__summary-container'>
          <Summary count={itemsAdded.count} price={totalPrice} />
          <div className='cart-wrapper__form'>
            <SimpleForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Basket
