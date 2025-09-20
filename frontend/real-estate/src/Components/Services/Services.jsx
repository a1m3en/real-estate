import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🏠",
      title: "Property Sales",
      description: "Expert guidance through the entire buying and selling process with personalized market analysis and strategic pricing."
    },
    {
      id: 2,
      icon: "🔑",
      title: "Property Management",
      description: "Comprehensive property management services including tenant screening, maintenance coordination, and rental optimization."
    },
    {
      id: 3,
      icon: "📊",
      title: "Market Analysis",
      description: "In-depth market research and property valuations to help you make informed investment decisions with confidence."
    },
    {
      id: 4,
      icon: "🏗️",
      title: "New Construction",
      description: "From concept to completion, we guide you through custom home building with trusted contractors and designers."
    },
    {
      id: 5,
      icon: "💰",
      title: "Investment Advisory",
      description: "Strategic real estate investment consulting to maximize your portfolio returns and identify lucrative opportunities."
    },
    {
      id: 6,
      icon: "📋",
      title: "Legal Support",
      description: "Complete legal assistance for all real estate transactions, contracts, and documentation with experienced attorneys."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header" data-aos="fade-up" data-aos-delay="100">
          <h2 className="services-title" data-aos="fade-up" data-aos-delay="200">Our Premium Services</h2>
          <p className="services-subtitle" data-aos="fade-up" data-aos-delay="300">
            Comprehensive real estate solutions tailored to exceed your expectations 
            with professional expertise and personalized attention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={400 + (index * 100)}
            >
              <div className="service-icon">
                <span className="icon-emoji">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-button">Learn More</button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta" data-aos="fade-up" data-aos-delay="1000">
          <h3 className="cta-title" data-aos="fade-up" data-aos-delay="1100">Ready to Start Your Real Estate Journey?</h3>
          <p className="cta-description" data-aos="fade-up" data-aos-delay="1200">
            Contact our expert team today for a personalized consultation and discover 
            how we can help you achieve your real estate goals.
          </p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="1300">
            <button className="cta-primary">Get Free Consultation</button>
            <button className="cta-secondary">View All Properties</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;