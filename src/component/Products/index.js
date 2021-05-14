import { useState, useEffect } from "react"
import Breadcrumbs from "../Breadcrumbs"
import Card from "../Card"
import Layout from "../Layout"

import "./index.scss"

const Products = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res=> res.json())
      .then(setProducts)
  }, [])

  console.log(products)
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
