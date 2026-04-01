'use client';

import FullWidthBorder from './ui/FullWidthBorder';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="relative w-full py-12 md:py-20">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-10">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Success Stories
          </h2>
          <p className="text-(--text-secondary) text-base md:text-lg px-4">
            See how NeetCode helped engineers land their dream jobs
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto">
        {/* Testimonials Grid with Borders */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:-mx-6 border-t border-border">
          {testimonials.map((testimonial, index) => {
            const isLeftColumn = index % 3 === 0;
            const lastRowStartIndex = Math.floor((testimonials.length - 1) / 3) * 3;
            const isInLastRow = index >= lastRowStartIndex;
            return (
              <div
                key={index}
                className={`p-6 md:p-8 flex flex-col gap-3 md:gap-4 border-b ${!isLeftColumn ? 'md:border-l' : ''} ${!isInLastRow ? 'md:border-b' : 'md:border-b-0'} border-border last:border-b-0`}
              >
              {/* User Image or Initials */}
              <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-[#fe5303]/20 border border-[#fe5303]/50">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-[#fe5303] font-bold text-sm">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </span>
                )}
              </div>

              {/* Name and Company */}
              <div>
                <h3 className="text-foreground text-xl font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <div className="flex items-center gap-2">
                  {testimonial.companyLogo && (
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      className="h-4 w-auto"
                      style={{
                        filter: testimonial.companyLogo === '/hero/openai.svg' ? 'var(--openai-filter)' : 'none'
                      }}
                    />
                  )}
                  <span className="text-(--text-secondary) text-sm">{testimonial.company}</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-(--text-secondary) text-base leading-relaxed flex-1">
                {testimonial.quote}
              </p>
            </div>
            );
          })}
        </div>
      </div>

      <FullWidthBorder />
    </section>
  );
}
