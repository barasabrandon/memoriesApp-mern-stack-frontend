import React from 'react';
import { Link } from 'react-router-dom';

import getStartedButtonGif from '../assets/images/getStartedButtonGif.gif';

export default function AboutText() {
  return (
    <div className="aboutText-container">
      <div className="aboutText-container-content">
        <div>
          <h5>MEMORIES APP</h5>
        </div>
        <div>
          <p>
            Wanna Keep all the memories of the current and previous events? This
            web app provides this opportunity by enabling storing of images and
            description texts and tags about such memories
          </p>
          <p>
            It also let's other people to view your comment and like each
            specific memory hence have a glimpse of what others think.
          </p>
          <p>Want to explore more? Click on the button below.</p>
        </div>
      </div>
      <Link to="/signin">
        <AboutGetStarted />
      </Link>
    </div>
  );
}

const AboutGetStarted = () => {
  return (
    <div className="add-memory">
      <div>
        <img src={getStartedButtonGif} className="add-memory-image" />
      </div>
    </div>
  );
};
