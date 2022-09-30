import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { BsPersonFill } from 'react-icons/bs';

function Nav() {
  return (
    <div className="navigation d-flex">
      <div className="navigation-container1 d-flex">
        <h1 className="navigation-title font-mont">BookStore CMS</h1>
        <Link to="/" className="navigation-link1 font-mont">BOOKS</Link>
        <Link to="/Categories" className="navigation-link2 font-mont">CATEGORIES</Link>
      </div>
      <BsPersonFill className="navigation-BsPersonFill" />
    </div>
  );
}

export default Nav;
