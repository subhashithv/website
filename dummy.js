import React, { useEffect, useState, useRef } from 'react';
import './navbar.css'; // Import the CSS file

<div className="container-wrapper">
        <div id="section0" className={`frame ${activeSection === 0 ? 'active-section' : ''}`}>
          <div className="text-section">
            <h3 className="section-heading">Machine Learning</h3>
            <p>
              Transform your concepts into reality faster than ever before. Our
              intuitive interface makes it easy to collaborate, iterate, and
              refine your creations until they're perfect. Plus, with real-time
              feedback and insights, you'll always stay one step ahead.
            </p>
            <a href="#" className="learn-more-button">
              Learn More<i className="fas fa-arrow-up icon"></i>
            </a>
          </div>
          <div className="image-section" ref={imageRef}>
            <img
              src="https://thenounproject.com/browse/icons/term/placeholder-image/"
              alt="Placeholder Image"
            />
          </div>
        </div>
        </div>
  
      
export default HomePage;
