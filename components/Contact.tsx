'use client';

import { SiteConfig } from '@/types/config';

interface ContactProps {
  config: SiteConfig;
}

export default function Contact({ config }: ContactProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Visit us or reach out with any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-accent rounded-xl p-8 text-center border border-primary/10">
            <div className="text-primary text-4xl mb-4">📞</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Phone</h3>
            <a
              href={`tel:${config.contact.phone}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {config.contact.phone}
            </a>
          </div>

          {/* Address */}
          <div className="bg-accent rounded-xl p-8 text-center border border-primary/10">
            <div className="text-primary text-4xl mb-4">📍</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">{config.contact.address}</p>
          </div>

          {/* Hours */}
          <div className="bg-accent rounded-xl p-8 text-center border border-primary/10">
            <div className="text-primary text-4xl mb-4">🕐</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground whitespace-pre-line text-sm">
              {config.contact.hours}
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-96 border border-primary/10">
          <iframe
            title="Salon Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(config.contact.address)}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
