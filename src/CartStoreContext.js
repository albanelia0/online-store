import { createContext, useEffect, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [products, setProducts] = useState()
  const [itemsAdded, setItemsAdded] = useState({ count: 0, items: [] })

  useEffect(() => {
    window.fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(setProducts)
  }, [])

  const addItem = ({ id, image, title, price }) => {
    const item = { id, image, title, price }
    if (itemsAdded.items.find(item => item.id === id)) return

    setItemsAdded(({ count, items }) => {
      return ({ count: count + 1, items: [...items, item] })
    })
  }

  const deleteItem = (idToDelete) => {
    const newValue = itemsAdded.items.filter(({ id }) => id !== idToDelete)
    setItemsAdded(({ count }) => {
      return ({ count: count - 1, items: [...newValue] })
    })
  }

  const sumTotalPrice = () => {
    const { items } = itemsAdded
    return items.reduce((accumulator, { price }) => {
      return accumulator + price
    }, 0)
  }

  const value = {
    products,
    setProducts,
    itemsAdded,
    addItem,
    sumTotalPrice,
    deleteItem
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider
}
