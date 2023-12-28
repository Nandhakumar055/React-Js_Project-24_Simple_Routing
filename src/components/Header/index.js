// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <Link to="/" className="nav-item-text-content">
          <div className="logo-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
            />
            <h1 className="logo-tittle">Wave</h1>
          </div>
        </Link>
        <ul className="nav-item-container">
          <li className="nav-item">
            <Link className="nav-item-text-content" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-text-content" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-text-content" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
