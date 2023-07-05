import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className='d-inline-block align-text-top' src="/ecommerce.svg" width="30" height="24"/>
          Fake Store
        </a>
      </div>
    </nav>
  )
}

export default Navbar
