import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='nav_logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul>
          <li><Link to="/profile">Ernest Achiever</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout"></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header