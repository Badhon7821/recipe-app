import React from 'react';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

const Navbar =() =>{
    return(
        <div className='container'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page" href="#">Add</Link>
        </li>
        <li className="nav-item">
          <Link to="/Form" className="nav-link" href="#">Form</Link>
        </li>
        </ul>    
        <div/> 
  </div>
</nav>
</div>

    );
}

export default Navbar;