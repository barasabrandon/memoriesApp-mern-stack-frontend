import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const userInLocalStorage = JSON.parse(localStorage.getItem('userProfile'));
  const checkUserName = userInLocalStorage?.result?.name;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Memories
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
          </ul>

          {/* Create Memory */}
          <Link to="/forms-create-memories">
            <div className="m-3">Add Memory </div>
          </Link>

          {/* Signin */}
          <Link to="/signin">
            <div>{checkUserName ? `${checkUserName}` : 'Sign in'}</div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
