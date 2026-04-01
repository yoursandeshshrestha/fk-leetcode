'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { label: 'Course', href: '/course' },
  { label: 'Practice', href: '/practice' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Header() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 w-full bg-[#0d0d14] border-b border-white/8 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Vertical lines for header */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full px-10">
          <div className="max-w-[1280px] h-full mx-auto relative">
            <div className="absolute inset-y-0 -left-6 w-px bg-white/8" />
            <div className="absolute inset-y-0 -right-6 w-px bg-white/8" />
          </div>
        </div>
      </div>

      <div className="w-full px-10 py-6 flex items-center relative z-10">
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/leetcode.png"
              alt="NeetCode"
              width={44}
              height={44}
              className="object-contain"
            />
            <span className="text-white text-2xl font-semibold">NeetCode</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center border border-white/8 rounded-lg px-6 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-medium text-base cursor-pointer hover:text-[#fe5303] transition-colors ${
                  link.isActive ? 'text-[#fe5303]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <div className="flex items-center gap-2 ml-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="relative w-[52px] h-[24px] bg-orange-950/50 rounded-full cursor-pointer transition-colors"
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-[#fe5303] rounded-full transition-transform duration-300 ease-out ${
                    isDarkMode ? 'left-0.5' : 'left-[30px]'
                  }`}
                />
              </button>
              <div className="w-5 h-5 flex items-center justify-center cursor-pointer text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 15.4545C6.98754 15.4545 4.54545 13.0125 4.54545 10C4.54545 6.98754 6.98754 4.54545 10 4.54545C13.0125 4.54545 15.4545 6.98754 15.4545 10C15.4545 13.0125 13.0125 15.4545 10 15.4545ZM9.09091 0H10.9091V2.72727H9.09091V0ZM9.09091 17.2727H10.9091V20H9.09091V17.2727ZM2.28611 3.57175L3.57175 2.28611L5.50023 4.21458L4.21458 5.50023L2.28611 3.57175ZM14.4997 15.7855L15.7855 14.4997L17.7139 16.4283L16.4283 17.7139L14.4997 15.7855ZM16.4283 2.28611L17.7139 3.57175L15.7855 5.50023L14.4997 4.21458L16.4283 2.28611ZM4.21458 14.4997L5.50023 15.7855L3.57175 17.7139L2.28611 16.4283L4.21458 14.4997ZM20 9.09091V10.9091H17.2727V9.09091H20ZM2.72727 9.09091V10.9091H0V9.09091H2.72727Z" />
                </svg>
              </div>
            </div>
          </nav>

          {/* Get Started Button */}
          <div className="flex items-center">
            <Link
              href="/get-started"
              className="rounded-lg bg-linear-to-br from-orange-400 to-orange-600 px-5 py-2 text-sm font-semibold text-white ring-2 ring-[#fe5303]/50 ring-offset-2 ring-offset-[#0d0d14] transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-[#fe5303]/70 cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Header bottom intersection dots */}
      <div className="absolute bottom-0 left-0 right-0 px-10 pointer-events-none">
        <div className="relative max-w-[1280px] mx-auto">
          {/* Left intersection */}
          <div className="absolute -left-6 top-0 -translate-x-1/2 -translate-y-1/2">
            {/* Corner lines */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-2 h-px bg-[#fe5303] -left-4 top-1/2 -translate-y-1/2" />
              <div className="absolute w-2 h-px bg-[#fe5303] -right-4 top-1/2 -translate-y-1/2" />
              <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -top-4" />
              <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -bottom-4" />
            </div>
            {/* Center dot */}
            <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
          </div>
          {/* Right intersection */}
          <div className="absolute -right-6 top-0 translate-x-1/2 -translate-y-1/2">
            {/* Corner lines */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-2 h-px bg-[#fe5303] -left-4 top-1/2 -translate-y-1/2" />
              <div className="absolute w-2 h-px bg-[#fe5303] -right-4 top-1/2 -translate-y-1/2" />
              <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -top-4" />
              <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -bottom-4" />
            </div>
            {/* Center dot */}
            <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
          </div>
        </div>
      </div>
    </header>
  );
}
