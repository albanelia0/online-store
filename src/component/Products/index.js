import { useState, useEffect } from "react"
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
    <div className="productsContainer">
      <Layout>
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
