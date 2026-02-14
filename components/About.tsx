'use client';

import Image from 'next/image';
import { SiteConfig } from '@/types/config';

interface AboutProps {
  config: SiteConfig;
}

export default function About({ config }: AboutProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: About Text */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {config.about}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Expert certified nail technicians with 10+ years experience</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Premium quality products and sterilized equipment</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Serene and hygienic environment for ultimate relaxation</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 lg:h-full lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about.jpg"
              alt="About Olivia Nail Lounge"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
