import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { BsPersonFill } from 'react-icons/bs';

function Nav() {
  return (
    <div className="navigation">
      <div className="navigation-container1">
        <h1 className="navigation-title">BookStore CMS</h1>
        <Link to="/" className="navigation-link1">BOOKS</Link>
        <Link to="/Categories" className="navigation-link2">CATEGORIES</Link>
      </div>
      <BsPersonFill className="navigation-BsPersonFill" />
    </div>
  );
}

export default Nav;
