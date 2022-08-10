import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <h1>BookStore CMS</h1>
      <Link to="/">Books</Link>
      <Link to="/Categories">CATEGORIES</Link>
    </div>
  );
}

export default Nav;
