'use client';

export default function LogoMarquee() {
  const logos = [
    { src: '/hero/google.svg', name: 'Google' },
    { src: '/hero/meta.svg', name: 'Meta' },
    { src: '/hero/openai.svg', name: 'OpenAI' },
    { src: '/hero/leetcode.svg', name: 'LeetCode' },
    { src: '/hero/microsoft.svg', name: 'Microsoft' },
    { src: '/hero/deepmind.svg', name: 'DeepMind' },
    { src: '/hero/gemini.svg', name: 'Gemini' },
    { src: '/hero/claude.svg', name: 'Claude' },
    { src: '/hero/antigravity.svg', name: 'Antigravity' },
    { src: '/hero/nanobanana.svg', name: 'NanoBanana' },
  ];

  return (
    <section className="w-full px-4 md:px-6 pb-4 font-sans bg-[#d4d0c8]">
      {/* Win2000 GroupBox */}
      <div
        className="w-full max-w-5xl mx-auto"
        style={{
          borderStyle: 'solid', borderWidth: '2px',
          borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
          borderRightColor: '#404040', borderBottomColor: '#404040',
        }}
      >
        {/* Title Bar */}
        <div className="win-titlebar">
          <span className="font-bold text-[11px] flex-1">
            NeetCode Trusted by <strong>2,000,000+</strong> Users - Hall of Fame
          </span>
        </div>

        {/* Marquee content */}
        <div className="p-3 bg-[#d4d0c8]">
          <p className="text-[11px] text-black mb-2">
            Engineers from these companies have used NeetCode to prepare for interviews:
          </p>

          {/* Classic HTML marquee-style scrolling row */}
          <div
            className="overflow-hidden"
            style={{
              borderStyle: 'solid', borderWidth: '2px',
              borderTopColor: '#808080', borderLeftColor: '#808080',
              borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
              background: '#ffffff',
            }}
          >
            <div className="flex animate-marquee">
              {/* First set */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex items-center justify-center gap-1.5 h-[56px] w-[140px] shrink-0 px-3"
                  style={{ borderRight: '1px solid #d4d0c8' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-5 w-auto"
                    style={{ filter: 'brightness(0)' }}
                  />
                  <span className="text-[10px] text-black font-bold">{logo.name}</span>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex items-center justify-center gap-1.5 h-[56px] w-[140px] shrink-0 px-3"
                  style={{ borderRight: '1px solid #d4d0c8' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-5 w-auto"
                    style={{ filter: 'brightness(0)' }}
                  />
                  <span className="text-[10px] text-black font-bold">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Small progress bar style row */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] text-[#808080]">Loading partner data...</span>
            <div
              className="h-3 w-32 bg-white overflow-hidden"
              style={{ border: '1px inset #808080' }}
            >
              <div className="h-full bg-[#316ac5] animate-pulse" style={{ width: '65%' }} />
            </div>
            <span className="text-[10px] text-[#808080]">65%</span>
          </div>
        </div>
      </div>

      <div className="mt-4 win-separator" />
    </section>
  );
}
