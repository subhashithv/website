import React, { useEffect, useState } from 'react';
import './styles.css'; // Import the CSS file
import Typed from 'typed.js'; // Import Typed.js if not already installed
import exampleImage from './assets/dummy_img.jpeg';

function HomePage() {
  const [activeSection, setActiveSection] = useState(0); // State for active section

  useEffect(() => {
    // Typed.js initialization
    var typed = new Typed('#custom-word', {
      strings: ['Tomorrow', 'Future', 'Today'],
      typeSpeed: 300,
      backSpeed: 200,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const toggleButton = (sectionIndex) => {
    setActiveSection(sectionIndex); // Update active section state
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <button className="nav-button" onClick={() => toggleButton(0)}>
            Home
          </button>
          <button className="nav-button" onClick={() => toggleButton(1)}>
            Services
          </button>
          <button className="nav-button1" onClick={() => toggleButton(2)}>
            <span className="button-text">Mindful<span className="highlight">AI</span></span>
          </button>
          <button className="nav-button" onClick={() => toggleButton(3)}>
            About
          </button>
          <button className="nav-button" onClick={() => toggleButton(4)}>
            Contact
          </button>
        </div>
      </nav>
      <div className="text-container">
        <p>Redefining <span id="custom-word"></span></p>
      </div>
      <div className="secondline">
        <p>with Intelligent Technologies.</p>
      </div>
      <div className="second-text-container">
        <p className="second-paragraph">Welcome to MindFulAI, where innovation meets intelligence. We specialize in leveraging cutting-edge AI solutions to revolutionize businesses and create unparalleled user experiences.</p>
        <button className="blue-button">Start a Project</button>
      </div>
      <div className="acontainer">
        <header className="header">
          <h1>What We Offer</h1>
        </header>
      </div>
      <div className="button-container">
        <button className={`button ${activeSection === 0 ? 'active' : ''}`} onClick={() => toggleButton(0)}>Gen Ai</button>
        <button className={`button ${activeSection === 1 ? 'active' : ''}`} onClick={() => toggleButton(1)}>Mern Stack</button>
        <button className={`button ${activeSection === 2 ? 'active' : ''}`} onClick={() => toggleButton(2)}>UI UX</button>
        <button className={`button ${activeSection === 3 ? 'active' : ''}`} onClick={() => toggleButton(3)}>Machine Learning</button>
        <button className={`button ${activeSection === 4 ? 'active' : ''}`} onClick={() => toggleButton(4)}>Cloud</button>
      </div>
      
      <div className="main-container">
    
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
          <div class="image-holder">
          <img src="https://thenounproject.com/browse/icons/term/placeholder-image/"
          alt='Placeholder'/>
          
          </div>
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
        </div>
       </div>
    
  );
}

export default HomePage;