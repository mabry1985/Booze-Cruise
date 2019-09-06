import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">Beer List</Link>
        </li>
        <li>
          <Link to="/add-keg">Add Keg</Link>
        </li>
      </ul>
      <h1 className="title">Booze Cruise</h1>
    </nav>
  );
}

export default Header;
