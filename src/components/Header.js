import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import './Home.css';

function Header() {
  const [hasLoggedOut, setHasLoggedOut] = useState(false);
  const navigate = useNavigate();
  const userInLocalStorage = JSON.parse(localStorage.getItem('userProfile'));
  const checkUserName = userInLocalStorage?.result?.name;

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(false);
    setHasLoggedOut(!hasLoggedOut);
  };

  const handleSignInLink = () => {
    if (checkUserName) {
      setHasLoggedOut(!hasLoggedOut);
    } else {
      navigate('/signin');
    }
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
          <div className="header-auth-container">
            <div onClick={handleSignInLink} className="header-auth-text">
              {checkUserName ? `${checkUserName}` : 'Sign in'}
            </div>
          </div>
        </div>
      </nav>
      {hasLoggedOut && (
        <div className="header-logout-button">
          <LogoutButton handleLogout={handleLogout} />
        </div>
      )}
    </div>
  );
}

export default Header;

const LogoutButton = ({ handleLogout }) => {
  return (
    <Button
      style={{
        border: 'none',
        outline: 'none',
        color: 'white',
      }}
      variant="outlined"
      startIcon={<LogoutOutlinedIcon />}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};
