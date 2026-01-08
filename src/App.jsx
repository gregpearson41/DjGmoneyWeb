
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Media from '@/components/Media';
import Social from '@/components/Social';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>DJ Gmoney - Professional DJ Services | Weddings, Events & Parties</title>
        <meta name="description" content="DJ Gmoney offers professional DJ services for weddings, corporate events, backyard parties, and BBQs. Book now for an unforgettable experience." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Media />
        <Social />
        <Contact />
        <Toaster />
      </div>
    </>
  );
}

export default App;
