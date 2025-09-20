import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Inclusions from "./Components/Inclusions/Inclusions";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Touch from "./Components/Touch/Touch";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out-sine', // Easing function
      once: true, // Animation happens only once
      offset: 100, // Trigger animations 100px before the element comes into view
      delay: 0, // Default delay
    });
  }, []);

  return (
<>
<Navbar />
<Home />
<Touch />
<Inclusions />
<Services />
<Footer />
</>
  );
}

export default App;
