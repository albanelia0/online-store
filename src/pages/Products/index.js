import {useContext } from "react"
import Breadcrumbs from "../../component/Breadcrumbs"
import Card from "../../component/Card"
import Layout from "../../component/Layout"

import { Context } from "../../CartStoreContext"

import "./index.scss"

const Products = () => {

  const { products } = useContext(Context)

  return (
    <div className="products-container">
      <Layout>
        <div className="header-container">
          <h3 className="header-container__title">Productos Destacados</h3>
          <Breadcrumbs/>
        </div>
        <div className="products">
          {products?.map(({id, image, title, price }) => {
            return (
              <div key={id}>
                <Card
                  title={title}
                  imgSrc={image}
                  price={price}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default Products
