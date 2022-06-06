import foodleLogo from '../../images/logo.svg'
import './Header.module.css'

const Header = () => {
  return(
  <header className="header">
      <a href="#">
        <img className="logo" src={foodleLogo} alt="Omnifood logo" />
      </a>
        <nav className="main-nav">
            <ul className="main-nav-list">
                <li><a className="main-nav-link" href="#section-how">How it works</a></li>
                <li><a className="main-nav-link" href="#section-meals">Meals</a></li>
                <li><a className="main-nav-link" href="#section-testimonials">Testimonials</a></li>
                <li><a className="main-nav-link" href="#section-pricing">Pricing</a></li>
                <li><a className="main-nav-link nav-cta" href="#cta-text">Try for free</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header