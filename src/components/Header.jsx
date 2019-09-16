import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/booze-cruise-logo.png';
import './header.scss';
import PropType from 'prop-types';

function Header(props) {

  return (
    <nav id='navbar'>
      <img
        className='site-logo'
        alt='booze cruise logo'
        src={logo} />
        <span>
          <h3>
            <Link to="/">Beer List </Link>
            |
            <Link to="/add-keg"> Add Keg</Link>
          </h3>
          <button onClick={() => props.onSend() }>Update List</button>
        </span>
    </nav>
  );
}

Header.propTypes = {
  onSend: PropType.func,
};

export default Header;
