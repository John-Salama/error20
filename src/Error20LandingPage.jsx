import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Home/HeroSection';
import MilestonesSection from './components/Home/MilestonesSection';
import TestimonialsSection from './components/Home/TestimonialsSection';
import ResourcesSection from './components/Home/ResourcesSection';
import VideosSection from './components/Home/VideosSection';
import WorkshopsSection from './components/Home/WorkshopsSection';
import CTASection from './components/Home/CTASection';
import SectionSeparator from './components/Layout/SectionSeparator';

const Error20LandingPage = () => {
  return (
    <div className="bg-purple-50 text-gray-900 font-inter">
      <Header />
      <HeroSection />
      <SectionSeparator />
      <MilestonesSection />
      <SectionSeparator />
      <TestimonialsSection />
      <SectionSeparator />
      <ResourcesSection />
      <SectionSeparator />
      <VideosSection />
      <SectionSeparator />
      <WorkshopsSection />
      <SectionSeparator />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Error20LandingPage;