import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className='d-inline-block align-text-top' src="/ecommerce.svg" width="30" height="24" />
          Fake Store
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-3"><a className="nav-link py-2 px-0 px-lg-3" href="/">Home</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
