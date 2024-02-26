import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import JoinSection from '../JoinSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <JoinSection/>
    </>
  );
}

export default Home;
