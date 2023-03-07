import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Header() {
  const navigate  = useNavigate();
  return (
    <div><nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
    
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to = "/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to = "/shoppingCart">
              <i className="bi bi-cart"></i>
            </NavLink>
          </li>
         
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Admin Panel
            </a>
            <ul className="dropdown-menu">
              <li style ={{cursor:"pointer"}}className="dropdown-item" onClick ={() => navigate("menuItem/menuitemlist")}>Add a new one</li>
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
          
              
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}

export default Header