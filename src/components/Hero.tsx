'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full py-20 px-10">
      <div className="max-w-[760px] mx-auto flex flex-col items-center">
        {/* Stats */}
        <div className="flex items-center gap-8 mb-10">
          <span className="text-sm text-(--text-secondary)">
            <span className="text-[#fe5303] font-semibold">1M+</span> Engineers prepared
          </span>
          <span className="text-(--text-secondary)">•</span>
          <span className="text-sm text-(--text-secondary)">
            <span className="text-[#fe5303] font-semibold">1,000+</span> Practice problems
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl font-semibold text-foreground text-center leading-[1.15] mb-6 whitespace-nowrap">
          A Better Way to Prepare
        </h1>

        {/* Description with Company Logos */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-base text-[#979e9b] text-center max-w-[635px] leading-6">
            Tech interview roadmaps trusted by engineers at
          </p>
          <div className="flex items-center -space-x-3">
            <div className="w-12 h-12 rounded-full border-2 border-background bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden z-10">
              <img src="/hero/google.svg" alt="Google" className="w-8 h-8 object-contain" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-background bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden z-20">
              <img src="/hero/meta.svg" alt="Meta" className="w-8 h-8 object-contain" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-background bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden z-30">
              <img
                src="/hero/openai.svg"
                alt="OpenAI"
                className="w-8 h-8 object-contain brightness-0 invert"
              />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-background bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden z-40">
              <img src="/hero/leetcode.svg" alt="LeetCode" className="w-8 h-8 object-contain" />
            </div>
          </div>
          <p className="text-lg text-(--text-secondary)">and other top tech companies</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-6">
          {/* Get Pro Button */}
          <Link
            href="/pro"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-br from-orange-400 to-orange-600 px-6 py-2.5 text-base font-semibold text-foreground ring-2 ring-[#fe5303]/50 ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-[#fe5303]/70 cursor-pointer group"
          >
            Get Pro
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 5l5 5-5 5" />
            </svg>
          </Link>

          {/* Start Free Button */}
          <Link
            href="/start"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--card-bg) px-6 py-2.5 text-base font-semibold text-foreground ring-2 ring-border ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] hover:bg-(--card-bg) hover:ring-transparent active:scale-[0.98] active:ring-border cursor-pointer group"
          >
            Start Free
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 5l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
