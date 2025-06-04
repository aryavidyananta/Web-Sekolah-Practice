import React from 'react';
import Navbar from './navbar';
import HeroSection from './header'; 
import WelcomeSection from './Welcome';
import StatsSection from './stats';
import Teacher from './team';
import Blog from './blog';
import Ekskul from './ekskul';
import Footer from './footer';
import CardsSection from './cardsection';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardsSection />
      <WelcomeSection />
      <Teacher />
      <Ekskul />
      {/* <StatsSection /> */}
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;
