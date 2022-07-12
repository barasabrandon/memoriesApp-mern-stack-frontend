import React from 'react';
import './About.css';
import AboutDeco from './AboutDeco';
import AboutText from './AboutText';

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
