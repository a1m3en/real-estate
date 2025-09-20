import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="hero-section">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content" data-aos="fade-right" data-aos-delay="200">
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">Crafting Tomorrow's Living Spaces:</p>
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="400">
              Set New Standards
              <br />
              in <span className="italic">Modern Home</span>
              <br />
              Construction
            </h1>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="600">
              <button className="cta-button primary">Explore Properties</button>
              <button className="cta-button secondary">Learn More</button>
            </div>
          </div>

          {/* Right Content - Building Image */}
          <div className="hero-image" data-aos="fade-left" data-aos-delay="500">
            <div className="building-complex">
              {/* Building 1 - Left */}
              <div className="building building-1">
                <div className="building-top"></div>
                <div className="building-body">
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                </div>
              </div>

              {/* Building 2 - Center (Tallest) */}
              <div className="building building-2">
                <div className="building-top"></div>
                <div className="building-body">
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                </div>
              </div>

              {/* Building 3 - Right */}
              <div className="building building-3">
                <div className="building-top"></div>
                <div className="building-body">
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                  <div className="window-row">
                    <div className="window"></div>
                    <div className="window"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
