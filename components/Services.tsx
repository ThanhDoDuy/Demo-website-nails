'use client';

import Image from 'next/image';
import { SiteConfig } from '@/types/config';

interface ServicesProps {
  config: SiteConfig;
}

export default function Services({ config }: ServicesProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of premium nail care services designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.services.map((service, index) => {
            // Map each service to a gallery image (cycle if more services than images)
            const bgImage = config.gallery[index % config.gallery.length];

            return (
              <div
                key={service.id}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Background Image */}
                <Image
                  src={bgImage}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-serif text-2xl font-semibold mb-1 drop-shadow-lg">
                    {service.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2 drop-shadow">
                    {service.description}
                  </p>
                  <p className="font-sans font-bold text-2xl text-white drop-shadow-lg">
                    {service.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
