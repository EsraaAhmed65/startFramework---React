import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg p-3 fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand text-white font">
          Start Framework
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/portfolio"
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
