import React from 'react';
import Footer from '../../components/Footer/Footer';
import Experience from './Experience/Experience';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
// import Work from './Work/Work';

function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      {/* <Work /> */}
      <Footer />
    </>
  );
}

export default Home;
