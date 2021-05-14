import Cart from "../Cart"
import { useHistory } from 'react-router-dom'
import Layout from "../Layout"

import "./index.scss"

const Header = () => {
  const history = useHistory()

  const handleOnLogoClick = () => {
    history.push("/")
  }
  return (
    <div className="container">
      <Layout>
        <div className="header">
          <img
            onClick={handleOnLogoClick}
            alt="patterson-agency-logo"
            className="header__img"
            src="/img/patterson-agency-logo.png"
          />
          <Cart/>
        </div>
      </Layout>
      <div className="line"/>
    </div>
  )
}

export default Header
