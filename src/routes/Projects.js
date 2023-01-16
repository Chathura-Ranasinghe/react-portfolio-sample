import React from 'react';
import GoToTop from '../components/GoToTop'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
      <GoToTop/>
    </div>
  );
};

export default Projects;