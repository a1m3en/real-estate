import React from 'react';
import './Inclusions.css';

const Inclusions = () => {
  return (
    <section className="inclusions-section" id="inclusions">
      <div className="inclusions-container">
        
        {/* Left Content */}
        <div className="inclusions-content" data-aos="fade-right" data-aos-delay="300">
          <h2 className="inclusions-title" data-aos="fade-up" data-aos-delay="400">
            Our timeless <span className="italic">inclusions</span>
          </h2>
          
          <p className="inclusions-description" data-aos="fade-up" data-aos-delay="500">
            We've been creating dream homes our clients are thrilled 
            to call their own. Delighting them with hand-picked 
            finishes, accessories and accents
          </p>
          
          <button className="inclusions-button" data-aos="fade-up" data-aos-delay="600">View Inclusions</button>
        </div>

        {/* Background Kitchen Image */}
        <div className="kitchen-background" data-aos="fade-left" data-aos-delay="200">
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Modern Kitchen" 
            className="kitchen-image"
          />
          <div className="kitchen-overlay"></div>
        </div>

      </div>
    </section>
  );
};

export default Inclusions;
