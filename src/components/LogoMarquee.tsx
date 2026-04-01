'use client';

import IntersectionDot from './ui/IntersectionDot';

export default function LogoMarquee() {
  const logos = [
    '/hero/google.svg',
    '/hero/meta.svg',
    '/hero/openai.svg',
    '/hero/leetcode.svg',
    '/hero/claude.svg',
    '/hero/deepmind.svg',
    '/hero/gemini.svg',
    '/hero/microsoft.svg',
    '/hero/antigravity.svg',
    '/hero/nanobanana.svg',
  ];

  return (
    <section className="relative w-full pt-13 pb-8">
      <div className="relative w-full max-w-[1280px] mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-foreground text-2xl">
            NeetCode Trusted by{' '}
            <span className="font-semibold">2M+</span> Users
          </h2>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="relative w-full">
        <div className="relative w-full max-w-[1280px] mx-auto">
          <div className="relative -mx-6 border-t border-border">
            <IntersectionDot position="left" verticalAlign="bottom" />
            <IntersectionDot position="right" verticalAlign="bottom" />

            <div className="overflow-hidden">
              <div className="flex animate-marquee">
                {/* First set */}
                {logos.map((logo, index) => (
                  <div
                    key={`logo-1-${index}`}
                    className="flex items-center justify-center h-[100px] w-[256px] border-r border-border shrink-0"
                  >
                    <img
                      src={logo}
                      alt="Company logo"
                      className="h-12 w-auto"
                      style={{
                        filter: logo === '/hero/openai.svg' ? 'var(--openai-filter)' : 'none'
                      }}
                    />
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {logos.map((logo, index) => (
                  <div
                    key={`logo-2-${index}`}
                    className="flex items-center justify-center h-[100px] w-[256px] border-r border-border shrink-0"
                  >
                    <img
                      src={logo}
                      alt="Company logo"
                      className="h-12 w-auto"
                      style={{
                        filter: logo === '/hero/openai.svg' ? 'var(--openai-filter)' : 'none'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Bottom Border */}
        <div className="w-full border-t border-border" />
      </div>
    </section>
  );
}
