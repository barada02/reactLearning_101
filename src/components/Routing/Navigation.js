import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <nav className="main-navigation">
      <div className="nav-brand">
        <NavLink to="/" className="brand-link">React Router Demo</NavLink>
      </div>
      
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
        <li>
          {isAuthenticated ? (
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
              Dashboard
            </NavLink>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
