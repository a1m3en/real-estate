import React from 'react';
import './Touch.css';

const Touch = () => {
  return (
    <section className="touch-section" id="about">
      <div className="touch-container">
        
        {/* Left House Image */}
        <div className="house-image left-house" data-aos="fade-right" data-aos-delay="200">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80" 
            alt="Modern Luxury Home" 
            className="house-photo"
          />
        </div>

        {/* Center Content */}
        <div className="touch-content" data-aos="fade-up" data-aos-delay="400">
          <div className="diamond-icon">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7L12 2z" fill="currentColor"/>
            </svg>
          </div>
          
          <h2 className="touch-title">
            If you can <span className="italic">dream it</span>, we<br />
            can <span className="italic">build it</span>.
          </h2>
          
          <p className="touch-description">
            We adapt a uniquely personalised perspective to each project to 
            deliver stunning spaces of optimal function. Renowned for our 
            architectural understanding and masterful craftsmanship, our 
            portfolio of residential projects
          </p>
          
          <button className="touch-button">Get in touch</button>
        </div>

        {/* Right House Image */}
        <div className="house-image right-house" data-aos="fade-left" data-aos-delay="600">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" 
            alt="Contemporary Architecture Home" 
            className="house-photo"
          />
        </div>

      </div>
    </section>
  );
};

export default Touch;
