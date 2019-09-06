import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <ul className="left">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/add-keg">Add Keg</Link>
      </li>
    </ul>
  );
}

export default Header;
