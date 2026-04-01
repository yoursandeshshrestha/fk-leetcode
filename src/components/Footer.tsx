'use client';

export default function Footer() {
  const links = {
    Links: [
      { label: 'Blind 75', href: '#' },
      { label: 'NeetCode 150', href: '#' },
      { label: 'NeetCode 250', href: '#' },
      { label: 'How to use NeetCode Effectively', href: '#' },
    ],
    Social: [
      { label: 'YouTube', href: '#', icon: '/hero/youtube.svg' },
      { label: 'LinkedIn', href: '#', icon: '/hero/linkedin.svg' },
      { label: 'Twitter / X', href: '#', icon: '/hero/x.svg' },
    ],
    Contact: [
      { label: 'support@neetcode.io', href: 'mailto:support@neetcode.io' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="w-full font-sans bg-[#d4d0c8]">
      {/* Win2000 taskbar-style footer at the very bottom */}

      {/* Main footer content */}
      <div className="px-4 md:px-6 pt-2 pb-2">
        {/* Footer as a Win2000 window */}
        <div
          className="w-full max-w-5xl mx-auto"
          style={{
            borderStyle: 'solid', borderWidth: '2px',
            borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
            borderRightColor: '#404040', borderBottomColor: '#404040',
          }}
        >
          <div className="win-titlebar">
            <span className="font-bold text-[11px] flex-1">neetcode.io - Site Navigation</span>
          </div>

          {/* Links grid */}
          <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <div
                  className="text-[11px] font-bold text-white px-2 py-0.5 mb-2"
                  style={{ background: '#0058b4' }}
                >
                  {category}
                </div>
                <ul className="flex flex-col gap-1">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="win-link flex items-center gap-1 text-[11px]"
                      >
                        {'icon' in item && item.icon && (
                          <img
                            src={item.icon}
                            alt=""
                            className="w-3 h-3"
                            style={{ filter: 'brightness(0)' }}
                          />
                        )}
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Horizontal rule */}
          <div className="mx-4 win-separator" />

          {/* Copyright */}
          <div className="px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/neetcode-logo.png"
                alt="NeetCode"
                width={16}
                height={16}
                className="object-contain"
                style={{ imageRendering: 'pixelated' }}
              />
              <span className="text-[11px] text-black">
                Copyright &copy; 2026 neetcode.io — All rights reserved.
              </span>
            </div>
            <span className="text-[10px] text-[#808080]">
              Best viewed in Internet Explorer 5.5+ at 800x600
            </span>
          </div>
        </div>
      </div>

      {/* Win2000 Taskbar */}
      <div className="win-taskbar px-2 gap-2 border-t-2 border-[#ffffff]">
        {/* Start button */}
        <button className="win-start">
          <img
            src="/neetcode-logo.png"
            alt=""
            width={16}
            height={16}
            className="object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
          <span className="text-[11px] font-bold">Start</span>
        </button>

        {/* Separator */}
        <div className="h-5 w-px bg-[#808080] mx-1" />

        {/* Taskbar window buttons */}
        {['NeetCode - Welcome', 'Course Catalog', 'Roadmap Explorer'].map((label) => (
          <button
            key={label}
            className="win-btn text-[11px] py-1 px-3 flex items-center gap-1"
            style={{ minWidth: '120px' }}
          >
            <img src="/neetcode-logo.png" alt="" width={12} height={12} className="object-contain" />
            <span className="truncate">{label}</span>
          </button>
        ))}

        <div className="flex-1" />

        {/* System tray */}
        <div
          className="flex items-center gap-2 px-2 h-full text-[10px] text-black"
          style={{
            borderStyle: 'solid', borderWidth: '1px',
            borderTopColor: '#808080', borderLeftColor: '#808080',
            borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
          }}
        >
          <span>&#9830;</span>
          <span>&#128266;</span>
          <span className="font-bold">12:00 PM</span>
        </div>
      </div>
    </footer>
  );
}
