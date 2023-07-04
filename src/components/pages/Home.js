import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import BannerPresentacion from '../BannerPresentacion';
// import CarouselBanner from '../CarouselBanner';


function Home() {
  return (
    <>
      <HeroSection />
      <BannerPresentacion />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
