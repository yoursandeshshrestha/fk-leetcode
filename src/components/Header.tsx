'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { label: 'Course', href: '/course' },
  { label: 'Practice', href: '/practice' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Win2000 Title Bar style top strip */}
      <div className="win-titlebar px-3 py-1 select-none">
        <div className="flex items-center gap-1.5 flex-1">
          {/* App icon */}
          <img
            src="/neetcode-logo.png"
            alt="NeetCode"
            width={16}
            height={16}
            className="object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
          <span className="text-white font-bold text-[11px]">NeetCode - Interview Preparation Suite v3.0</span>
        </div>
        {/* Win2000 window control buttons */}
        <div className="flex items-center gap-1">
          <button
            aria-label="Minimize"
            className="w-[16px] h-[14px] bg-[#d4d0c8] flex items-center justify-center text-[10px] font-bold leading-none"
            style={{
              borderStyle: 'solid', borderWidth: '2px',
              borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
              borderRightColor: '#404040', borderBottomColor: '#404040',
            }}
          >
            <span className="mb-1">_</span>
          </button>
          <button
            aria-label="Maximize"
            className="w-[16px] h-[14px] bg-[#d4d0c8] flex items-center justify-center text-[9px] font-bold leading-none"
            style={{
              borderStyle: 'solid', borderWidth: '2px',
              borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
              borderRightColor: '#404040', borderBottomColor: '#404040',
            }}
          >
            <span>&#9635;</span>
          </button>
          <button
            aria-label="Close"
            className="w-[16px] h-[14px] bg-[#d4d0c8] flex items-center justify-center text-[11px] font-bold leading-none"
            style={{
              borderStyle: 'solid', borderWidth: '2px',
              borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
              borderRightColor: '#404040', borderBottomColor: '#404040',
            }}
          >
            <span>&#x2715;</span>
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="win-menubar px-1">
        {(['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'] as string[]).map((menu) => (
          <button
            key={menu}
            className="win-menuitem text-[11px] font-sans"
            onMouseEnter={() => setActiveMenu(menu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className="underline">{menu[0]}</span>{menu.slice(1)}
          </button>
        ))}
        <div className="flex-1" />
        <Link href="/get-started" className="win-btn text-[11px] mx-1 my-0.5">
          Get Started &raquo;
        </Link>
      </div>

      {/* Address / Navigation Bar */}
      <div
        className="bg-[#d4d0c8] px-2 py-1 flex items-center gap-2 border-b border-[#808080]"
        style={{ borderTop: '1px solid #808080' }}
      >
        {/* Back / Forward / Refresh buttons */}
        <button
          className="win-btn text-[11px] px-3 py-0.5"
          aria-label="Back"
        >
          &#9664; Back
        </button>
        <button
          className="win-btn text-[11px] px-3 py-0.5"
          aria-label="Forward"
        >
          Forward &#9654;
        </button>
        <button
          className="win-btn text-[11px] px-3 py-0.5"
          aria-label="Refresh"
        >
          &#8635; Refresh
        </button>

        {/* Separator */}
        <div className="w-px h-5 bg-[#808080] mx-1" />

        {/* Address bar */}
        <div className="flex items-center gap-1 flex-1">
          <span className="text-[11px] font-bold text-[#000000]">Address</span>
          <div
            className="flex-1 bg-white flex items-center px-2 py-0.5 text-[11px]"
            style={{
              borderStyle: 'solid', borderWidth: '2px',
              borderTopColor: '#808080', borderLeftColor: '#808080',
              borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
            }}
          >
            <span className="text-[#0000cc]">http://www.neetcode.io/</span>
          </div>
          <button className="win-btn text-[11px] px-3 py-0.5">Go</button>
        </div>

        {/* Nav links as toolbar buttons */}
        <div className="hidden lg:flex items-center gap-1 ml-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="win-btn text-[11px] px-3 py-0.5"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Win2000 Status/Info bar */}
      <div className="win-statusbar px-2 py-0.5">
        <div className="win-statusbar-panel flex-1 text-[11px]">
          <span className="text-[#0000cc]">neetcode.io</span>
          <span> - Trusted by </span>
          <strong>2,000,000+</strong>
          <span> engineers worldwide</span>
        </div>
        <div className="win-statusbar-panel text-[11px] px-3">
          <span className="text-green-700">&#9679;</span>
          <span className="ml-1">Internet zone</span>
        </div>
        <div className="win-statusbar-panel text-[11px] px-3">
          <span>100%</span>
        </div>
      </div>
    </header>
  );
}
