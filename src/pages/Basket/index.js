import { useContext } from "react"
import CartItems from "../../component/CartItems"

import { Context } from "../../CartStoreContext"
import Layout from "../../component/Layout"

import "./index.scss"
import Resume from "../../component/Resume"

const Basket = () => {
  const { itemsAdded, handleToSumTotalPrice, handleToDeleteItem } = useContext(Context)

  const totalPrice = handleToSumTotalPrice()

  return (
    <Layout>
      <div className="cart-wrapper">
        <CartItems handleToDeleteItem={handleToDeleteItem} allItems={itemsAdded.items}/>
        <div>
          <Resume count={itemsAdded.count} price={totalPrice} />
        </div>
      </div>
    </Layout>
  )
}

export default Basket
