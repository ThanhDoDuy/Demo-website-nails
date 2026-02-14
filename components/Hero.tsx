'use client';

import Image from 'next/image';
import { SiteConfig } from '@/types/config';

interface HeroProps {
  config: SiteConfig;
  onBookClick: () => void;
}

export default function Hero({ config, onBookClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-pretty">
            {config.salonName}
          </h1>
          <p className="font-sans text-xl md:text-2xl mb-8 text-pretty" style={{ color: '#C9A7A7' }}>
            {config.tagline}
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
            Experience luxury and elegance in every visit. Premium nail care in a serene sanctuary.
          </p>
          <button
            onClick={onBookClick}
            className="inline-block bg-foreground text-background font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200 w-fit"
          >
            BOOK APPOINTMENT
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-full lg:h-[600px] flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={config.heroImage}
              alt={config.salonName}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
