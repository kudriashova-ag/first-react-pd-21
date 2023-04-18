import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contact</NavLink>
      <NavLink to="/users">Users</NavLink>
    </header>
  );
}

export default Header;
