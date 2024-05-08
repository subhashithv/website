import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css'; 
import Typed from 'typed.js'; 
import exampleImage from './assets/dummy_img.jpeg';

function HomePage() {
  const [activeSection, setActiveSection] = useState(0); 
  const highlightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#imageHolder',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => handleImageTransition(),
    });
  }, []);

  const handleImageTransition = () => {
    gsap.fromTo(
      '.image-container img',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.inOut' }
    );
  };

  const toggleButton = (sectionIndex) => {
    setActiveSection(sectionIndex); 
   
    const buttonContainer = document.querySelector('.button-container');
    const buttons = buttonContainer.querySelectorAll('.button');
    const activeButton = buttons[sectionIndex];
    const highlight = highlightRef.current;
    const offsetLeft = activeButton.offsetLeft;
    const buttonWidth = activeButton.offsetWidth;
    highlight.style.width = `${buttonWidth}px`;
    highlight.style.transform = `translateX(${offsetLeft}px)`;
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
        <div className="highlight" ref={highlightRef}></div> 
        <button className={`button ${activeSection === 0 ? 'active' : ''}`} onClick={() => toggleButton(0)}>Gen Ai</button>
        <button className={`button ${activeSection === 1 ? 'active' : ''}`} onClick={() => toggleButton(1)}>Mern Stack</button>
        <button className={`button ${activeSection === 2 ? 'active' : ''}`} onClick={() => toggleButton(2)}>UI UX</button>
        <button className={`button ${activeSection === 3 ? 'active' : ''}`} onClick={() => toggleButton(3)}>Machine Learning</button>
        <button className={`button ${activeSection === 4 ? 'active' : ''}`} onClick={() => toggleButton(4)}>Cloud</button>
      </div>
      <div className="main-container">
        <div className="text-section" id="section-0">
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
        <div className="image-holder" id="imageHolder">
          <div className="image-container">
            <img src="https://source.unsplash.com/random/800x600" alt="Placeholder" />
          </div>
        </div>
        <div className="text-section" id="section-1">
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
        <div className="text-section" id="section-2">
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
        <div className="text-section" id="section-3">
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
