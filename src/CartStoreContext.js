import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const Provider = ({children}) => {
  const [products, setProducts] = useState()
  const [itemsAdded, setItemsAdded] = useState({count: 0, items: []})

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res=> res.json())
      .then(setProducts)
  }, [])

  const value = {
    products,
    setProducts,
    itemsAdded,
    setItemsAdded,
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Consumer: Context.Consumer,
};
