import Layout from "../Layout"
import "./index.scss"

const Header = () => {
  return (
    <div className="container">
      <Layout>
        <div className="header">
          <img
            alt="patterson-agency-logo"
            className="header__img"
            src="/img/patterson-agency-logo.png"
          />
          <div>
            <p>hola</p>
          </div>
        </div>
      </Layout>
      <div className="line"/>
    </div>
  )
}

export default Header
