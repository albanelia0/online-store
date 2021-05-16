import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './component/Header'
import Basket from './pages/Basket'
import Products from './pages/Products'

import './App.scss'
import CartStoreContext from './CartStoreContext'

function App () {
  return (
    <Router>
      <CartStoreContext.Provider>
        <Header />
        <Switch>
          <Route exact path='/' component={Products} />
          <Route path='/cesta' component={Basket} />
        </Switch>
      </CartStoreContext.Provider>
    </Router>
  )
}

export default App
