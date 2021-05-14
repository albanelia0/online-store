import { useState, useEffect } from "react"
import Breadcrumbs from "../../component/Breadcrumbs"
import Card from "../../component/Card"
import Layout from "../../component/Layout"

import "./index.scss"

const Products = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res=> res.json())
      .then(setProducts)
  }, [])

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
