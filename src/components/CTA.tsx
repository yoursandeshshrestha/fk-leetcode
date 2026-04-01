'use client';

import FullWidthBorder from './ui/FullWidthBorder';

export default function CTA() {
  return (
    <section className="relative w-full pb-20 -mt-20">
      <div className="relative w-full max-w-[1280px] mx-auto">
        {/* Bordered Container */}
        <div className="relative -mx-6">
          <div className="relative flex flex-col lg:flex-row">
            {/* Left: Heading & Features - 50% */}
            <div className="w-full lg:w-1/2 p-12 border-r border-border">
              <h2 className="text-foreground text-4xl font-bold mb-4">
                Start Practicing for Free - and hating leetcode is must.
              </h2>
              <p className="text-(--text-secondary) text-lg mb-8">
                The best resources for coding interviews. Period.
              </p>

              {/* Features List */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fe5303] mt-2 shrink-0" />
                  <p className="text-(--text-secondary) text-base">
                    Organized study plans: Blind 75, NeetCode 150, NeetCode 250
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fe5303] mt-2 shrink-0" />
                  <p className="text-(--text-secondary) text-base">
                    Detailed video explanations for every problem
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fe5303] mt-2 shrink-0" />
                  <p className="text-(--text-secondary) text-base">
                    Track your progress and stay motivated
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fe5303] mt-2 shrink-0" />
                  <p className="text-(--text-secondary) text-base">
                    Join our public Discord community
                  </p>
                </div>
              </div>
            </div>

            {/* Right: CTA Buttons - 50% */}
            <div className="w-full lg:w-1/2 p-12 flex flex-col items-center justify-center gap-6">
              <button className="w-full max-w-md inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-br from-orange-400 to-orange-600 px-6 py-3 text-base font-semibold text-foreground ring-2 ring-[#fe5303]/50 ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-[#fe5303]/70 cursor-pointer group">
                Start Practicing
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
              </button>
              <div className="w-full max-w-md flex gap-4">
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-(--card-bg) px-6 py-3 text-base font-semibold text-foreground ring-2 ring-border ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] hover:bg-(--card-bg) hover:ring-transparent active:scale-[0.98] active:ring-border cursor-pointer group">
                  View Roadmap
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
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-(--card-bg) px-6 py-3 text-base font-semibold text-foreground ring-2 ring-border ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] hover:bg-(--card-bg) hover:ring-transparent active:scale-[0.98] active:ring-border cursor-pointer group">
                  Join Discord
                  <img src="/discord.svg" alt="Discord" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FullWidthBorder />
    </section>
  );
}
