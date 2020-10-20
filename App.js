import React, { } from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Serv from './Components/Serv';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Brain from './assets/ai-brain.svg';
import Face from './assets/profile_image.jpeg';
import Mac from './assets/Macbook.png';



const App = () => {
  return (
    <div className="App">
      <Hero src={Brain} />
      <About src={Face} />
      <Serv src={Mac} />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
