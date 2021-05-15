import { useContext } from "react"
import CartItems from "../../component/CartItems"

import { Context } from "../../CartStoreContext"
import Layout from "../../component/Layout"

import "./index.scss"

const Basket = () => {
  const { itemsAdded } = useContext(Context)
  return (
    <Layout>
      <div className="cart-wrapper">
        <CartItems allItems={itemsAdded.items}/>
        <div>
          Resumen del carrito
        </div>
      </div>
    </Layout>
  )
}

export default Basket
