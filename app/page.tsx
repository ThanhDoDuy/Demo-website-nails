'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import BookingForm from '@/components/BookingForm';
import siteConfig from '@/config/site.json';
import { SiteConfig } from '@/types/config';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const config = siteConfig as SiteConfig;
  const openBooking = () => setIsBookingOpen(true);

  return (
    <main className="min-h-screen bg-background">
      <Navbar config={config} onBookClick={openBooking} />

      <Hero config={config} onBookClick={openBooking} />

      <div id="services">
        <Services config={config} />
      </div>

      <div id="about">
        <About config={config} />
      </div>

      <div id="reviews">
        <Reviews config={config} />
      </div>

      <div id="contact">
        <Contact config={config} />
      </div>

      <BookingForm
        config={config}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
