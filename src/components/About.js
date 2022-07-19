import React from 'react';
import AboutDeco from './AboutDeco';
import AboutText from './AboutText';

import './About.css';

export default function About() {
  return (
    <div className="about-body">
      <div className="container">
        <AboutDeco />
        <AboutText />
      </div>
    </div>
  );
}
