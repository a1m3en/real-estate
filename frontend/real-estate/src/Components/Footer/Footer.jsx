import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="luxury-footer" id="contact">
      
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Company Info */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
            <div className="footer-logo" data-aos="fade-up" data-aos-delay="200">
              <h2 className="company-name">RealestateRoyal</h2>
              <div className="logo-accent"></div>
            </div>
            <p className="company-description" data-aos="fade-up" data-aos-delay="300">
              Crafting exceptional living spaces with unparalleled attention to detail. 
              Your dream home awaits with our premium real estate services and 
              masterful architectural expertise.
            </p>
            <div className="social-media" data-aos="fade-up" data-aos-delay="400">
              <a href="#" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.110.222.082.343-.09.368-.293 1.177-.332 1.342-.053.225-.172.271-.402.162-1.507-.703-2.448-2.906-2.448-4.676 0-3.808 2.776-7.297 7.999-7.297 4.197 0 7.459 2.986 7.459 6.985 0 4.169-2.628 7.527-6.279 7.527-1.226 0-2.383-.640-2.777-1.404l-.75 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
            <h3 className="section-title" data-aos="fade-up" data-aos-delay="300">Our Services</h3>
            <ul className="footer-links" data-aos="fade-up" data-aos-delay="400">
              <li><a href="#property-sales">Property Sales</a></li>
              <li><a href="#property-management">Property Management</a></li>
              <li><a href="#market-analysis">Market Analysis</a></li>
              <li><a href="#new-construction">New Construction</a></li>
              <li><a href="#investment-advisory">Investment Advisory</a></li>
              <li><a href="#legal-support">Legal Support</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
            <h3 className="section-title" data-aos="fade-up" data-aos-delay="400">Quick Links</h3>
            <ul className="footer-links" data-aos="fade-up" data-aos-delay="500">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#inclusions">Inclusions</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="400">
            <h3 className="section-title" data-aos="fade-up" data-aos-delay="500">Get In Touch</h3>
            <div className="contact-info" data-aos="fade-up" data-aos-delay="600">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <span>123 Luxury Avenue</span>
                  <span>Premium District, City 12345</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <span>+1 (555) 123-4567</span>
                  <span>+1 (555) 987-6543</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <span>info@realestateroyale.com</span>
                  <span>sales@realestateroyale.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="newsletter-section" data-aos="fade-up" data-aos-delay="700">
        <div className="footer-container">
          <div className="newsletter-content">
            <div className="newsletter-text" data-aos="fade-up" data-aos-delay="800">
              <h3>Stay Updated with Exclusive Properties</h3>
              <p>Subscribe to receive the latest luxury listings and market insights directly to your inbox.</p>
            </div>
            <div className="newsletter-form" data-aos="fade-up" data-aos-delay="900">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="1000">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="copyright">
              <p>&copy; 2025 RealestateRoyal. All rights reserved.</p>
            </div>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;