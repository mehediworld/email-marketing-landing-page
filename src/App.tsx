import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Integrations } from './components/Integrations';
import { Copyright } from './components/Copyright';
import { Trust } from './components/Trust';
import { SecurityFeatures } from './components/SecurityFeatures';
import { ROICalculator } from './components/ROICalculator';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <Hero />
        <Features />
        <Integrations />
        <Copyright />
        <Trust />
        <SecurityFeatures />
        <ROICalculator />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;