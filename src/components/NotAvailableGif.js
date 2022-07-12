import React from 'react';
import { Link } from 'react-router-dom';

import sadMan from '../assets/animations/sadMan.gif';

export default function NotAvailableGif() {
  return (
    <div className="home-loading-animation">
      <img
        src={sadMan}
        style={{
          color: 'white',
        }}
      />
      <div className="text">
        <h4 className="text-title">Oops! No Memories found</h4>
        <Link to="/forms-create-memories">
          <small className="text-small">Create a memory</small>
        </Link>
      </div>
    </div>
  );
}
