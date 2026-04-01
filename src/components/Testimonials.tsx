'use client';

import FullWidthBorder from './ui/FullWidthBorder';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="relative w-full py-20">
      <div className="relative w-full max-w-[1280px] mx-auto px-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-white/60 text-lg">
            See how NeetCode helped engineers land their dream jobs
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto">
        {/* Testimonials Grid with Borders */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-6 border-t border-white/10">
          {testimonials.map((testimonial, index) => {
            const isLeftColumn = index % 3 === 0;
            const isBottomRow = index >= 3;
            return (
              <div
                key={index}
                className={`p-8 flex flex-col gap-4 ${!isLeftColumn ? 'border-l' : ''} ${!isBottomRow ? 'border-b' : ''} border-white/10`}
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
                <h3 className="text-white text-xl font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <div className="flex items-center gap-2">
                  {testimonial.companyLogo && (
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      className="h-4 w-auto brightness-0 invert opacity-60"
                    />
                  )}
                  <span className="text-white/60 text-sm">{testimonial.company}</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-white/70 text-base leading-relaxed flex-1">
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
