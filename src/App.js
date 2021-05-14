import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Basket from "./pages/Basket"
import Header from './component/Header';
import Products from './component/Products';

import './App.scss';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/cesta" component={Basket}/>
      </Switch>
    </Router>
  );
}

export default App;
