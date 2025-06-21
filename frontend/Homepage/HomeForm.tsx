import React from 'react';
import Navbar from './Navbar'; 
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        {/* You can add more sections here like Testimonials, Pricing, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
