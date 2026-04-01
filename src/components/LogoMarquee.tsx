'use client';

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
          <h2 className="text-white text-2xl">
            NeetCode Trusted by{' '}
            <span className="font-semibold">2M+</span> Users
          </h2>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="relative w-full">
        <div className="relative w-full max-w-[1280px] mx-auto">
          <div className="relative -mx-6 border-t border-white/10">
          {/* Bottom Left Intersection */}
          <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-2 h-px bg-[#fe5303] -left-4 top-1/2 -translate-y-1/2" />
              <div className="absolute w-2 h-px bg-[#fe5303] -right-4 top-1/2 -translate-y-1/2" />
              <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -top-4" />
              <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -bottom-4" />
            </div>
            <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
          </div>

          {/* Bottom Right Intersection */}
          <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-2 h-px bg-[#fe5303] -left-4 top-1/2 -translate-y-1/2" />
              <div className="absolute w-2 h-px bg-[#fe5303] -right-4 top-1/2 -translate-y-1/2" />
              <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -top-4" />
              <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -bottom-4" />
            </div>
            <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-marquee">
            {/* First set */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center h-[100px] w-[256px] border-r border-white/10 shrink-0"
              >
                <img
                  src={logo}
                  alt="Company logo"
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center h-[100px] w-[256px] border-r border-white/10 shrink-0"
              >
                <img
                  src={logo}
                  alt="Company logo"
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
            ))}
            </div>
          </div>
          </div>
        </div>

        {/* Full Width Bottom Border */}
        <div className="w-full border-t border-white/10" />
      </div>
    </section>
  );
}
