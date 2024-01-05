import './index.css'

const Header = () => (
  <div className="navbar-main-container">
    <nav className="nav-bar-container">
      <h1 className="app-name">Madelyn Troff</h1>
      <ul className="nav-item-container">
        <li className="nav-item">
          <a href="#aboutSection" className="hyper-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#projectSection" className="hyper-link">
            Project
          </a>
        </li>
        <li className="nav-item">
          <a href="#contactSection" className="hyper-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
