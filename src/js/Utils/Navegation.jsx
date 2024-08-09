import React from 'react'
const Navegation = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand text-white" href="#">
          Start Boostrap
        </a>
        <button
          className="navbar-toggler bg-white "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white h" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white h" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
  
  export default Navegation
  