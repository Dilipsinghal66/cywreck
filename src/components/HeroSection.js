import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import wb from "../images/Wreckboat.png";

function HeroSection() {
  return (
    <div className="hero-section-main">
      <div className='hero-container' style={{ backgroundImage: `url(${wb})` }}>
      <h1>Wreckbot AI Cybersecurity Suite</h1>
      <p>A predictive AI suite capable of solving every cybersecurity issue. Compatible with APIs, networks, cloud, and code reviews.</p>
      <div className='hero-btns'>
      <button class="btn btn--curve">Join Waitlist</button>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
