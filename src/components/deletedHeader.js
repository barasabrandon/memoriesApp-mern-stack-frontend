import { Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const userInLocalStorage = JSON.parse(localStorage.getItem('userProfile'));
  const checkUserName = userInLocalStorage?.result?.name;

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
  };

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
          <div>
            <Link to="/signin">
              <div>{checkUserName ? `${checkUserName}` : 'Sign in'}</div>
            </Link>
          </div>
        </div>
      </nav>
      <LogoutButton handleLogout={handleLogout} />
    </div>
  );
}

export default Header;

const LogoutButton = ({ handleLogout }) => {
  return <Button onClick={handleLogout}>Logout</Button>;
};
