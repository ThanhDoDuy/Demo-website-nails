'use client';

import { useState } from 'react';
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

  return (
    <main className="min-h-screen bg-background">
      <Hero config={config} onBookClick={() => setIsBookingOpen(true)} />

      <div id="services">
        <Services config={config} />
      </div>

      <About config={config} />

      <Reviews config={config} />

      <Contact config={config} />

      <BookingForm
        config={config}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
