
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Wholesale from '../components/Wholesale';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <Wholesale />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
