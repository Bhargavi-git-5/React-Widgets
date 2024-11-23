// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/users">User Management</Link> | 
        <Link to="/roles">Role Management</Link>
      </nav>
    </div>
  );
};

export default Navbar;
