import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

function Nav() {
  return (
    <div className="navigation">
      <h1 className="navigation-title">BookStore CMS</h1>
      <Link to="/">Books</Link>
      <Link to="/Categories">CATEGORIES</Link>
    </div>
  );
}

export default Nav;
