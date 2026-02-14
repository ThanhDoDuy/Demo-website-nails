'use client';

import { SiteConfig } from '@/types/config';

interface ReviewsProps {
  config: SiteConfig;
}

export default function Reviews({ config }: ReviewsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our delighted clients who have experienced the Olivia difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary/10"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-primary text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author */}
              <p className="font-semibold text-foreground">
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
