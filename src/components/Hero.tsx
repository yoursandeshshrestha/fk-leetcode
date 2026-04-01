'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full p-4 md:p-6 font-sans bg-[#d4d0c8]">
      {/* Outer teal/green desktop background area */}
      <div className="w-full bg-[#008080] p-6 md:p-10 min-h-[480px] flex flex-col items-center justify-center gap-6">

        {/* Main Welcome Dialog Window */}
        <div
          className="w-full max-w-[600px] bg-[#d4d0c8]"
          style={{
            borderStyle: 'solid', borderWidth: '2px',
            borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
            borderRightColor: '#404040', borderBottomColor: '#404040',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          {/* Title Bar */}
          <div className="win-titlebar">
            <img src="/neetcode-logo.png" alt="" width={14} height={14} className="object-contain" style={{ imageRendering: 'pixelated' }} />
            <span className="font-bold text-[11px] flex-1">Welcome to NeetCode</span>
            <div className="flex items-center gap-1">
              <button aria-label="Minimize" className="w-[16px] h-[14px] bg-[#d4d0c8] text-black text-[10px] flex items-center justify-center"
                style={{ borderStyle: 'solid', borderWidth: '2px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#404040', borderBottomColor: '#404040' }}>
                <span className="mb-1">_</span>
              </button>
              <button aria-label="Maximize" className="w-[16px] h-[14px] bg-[#d4d0c8] text-black text-[9px] flex items-center justify-center"
                style={{ borderStyle: 'solid', borderWidth: '2px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#404040', borderBottomColor: '#404040' }}>
                <span>&#9635;</span>
              </button>
              <button aria-label="Close" className="w-[16px] h-[14px] bg-[#d4d0c8] text-black text-[11px] flex items-center justify-center"
                style={{ borderStyle: 'solid', borderWidth: '2px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#404040', borderBottomColor: '#404040' }}>
                <span>&#x2715;</span>
              </button>
            </div>
          </div>

          {/* Dialog Body */}
          <div className="p-4 flex flex-col gap-4">
            {/* Icon + Main text */}
            <div className="flex items-start gap-4">
              {/* Big info icon */}
              <div
                className="w-14 h-14 rounded-full bg-[#ffffff] flex items-center justify-center shrink-0 mt-1"
                style={{
                  borderStyle: 'solid', borderWidth: '2px',
                  borderTopColor: '#808080', borderLeftColor: '#808080',
                  borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
                }}
              >
                <span style={{ fontSize: '32px', lineHeight: 1 }}>&#9432;</span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[20px] font-bold text-black leading-tight">
                  A Better Way to Prepare for<br />Coding Interviews
                </h1>
                <p className="text-[11px] text-black leading-relaxed">
                  Tech interview roadmaps trusted by engineers at the world&apos;s top companies.
                  Start your journey today with structured learning paths and 1,000+ practice problems.
                </p>
                {/* Stats in sunken panel */}
                <div
                  className="flex items-center gap-4 p-2 bg-white text-[11px]"
                  style={{
                    borderStyle: 'solid', borderWidth: '2px',
                    borderTopColor: '#808080', borderLeftColor: '#808080',
                    borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
                  }}
                >
                  <span><strong className="text-[#0058b4]">1M+</strong> Engineers prepared</span>
                  <span className="text-[#808080]">|</span>
                  <span><strong className="text-[#0058b4]">1,000+</strong> Practice problems</span>
                </div>
              </div>
            </div>

            {/* Horizontal separator */}
            <div className="win-separator" />

            {/* Company logos row */}
            <div className="flex flex-col gap-1">
              <p className="text-[11px] text-black">Trusted by engineers previously at:</p>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1 bg-white px-2 py-1"
                  style={{ border: '1px solid #808080' }}>
                  <img src="/hero/google.svg" alt="Google" className="h-4 w-auto" style={{ filter: 'brightness(0)' }} />
                  <span className="text-[10px]">Google</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1"
                  style={{ border: '1px solid #808080' }}>
                  <img src="/hero/meta.svg" alt="Meta" className="h-4 w-auto" style={{ filter: 'brightness(0)' }} />
                  <span className="text-[10px]">Meta</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1"
                  style={{ border: '1px solid #808080' }}>
                  <img src="/hero/openai.svg" alt="OpenAI" className="h-4 w-auto" style={{ filter: 'brightness(0)' }} />
                  <span className="text-[10px]">OpenAI</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1"
                  style={{ border: '1px solid #808080' }}>
                  <img src="/hero/microsoft.svg" alt="Microsoft" className="h-4 w-auto" style={{ filter: 'brightness(0)' }} />
                  <span className="text-[10px]">Microsoft</span>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="win-separator" />

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-2">
              <Link href="/pro" className="win-btn-primary text-[11px]">
                Get Pro
              </Link>
              <Link href="/start" className="win-btn text-[11px]">
                Start Free
              </Link>
              <button className="win-btn text-[11px]">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Secondary small window — "Did you know?" tooltip style */}
        <div
          className="w-full max-w-[600px] bg-[#d4d0c8]"
          style={{
            borderStyle: 'solid', borderWidth: '2px',
            borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
            borderRightColor: '#404040', borderBottomColor: '#404040',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          <div className="win-titlebar">
            <span className="text-[10px] font-bold flex-1">NeetCode Tip of the Day</span>
          </div>
          <div className="p-3 flex items-center gap-3">
            <span style={{ fontSize: '24px' }}>&#128161;</span>
            <p className="text-[11px] text-black leading-relaxed">
              <strong>Did you know?</strong> NeetCode&apos;s Blind 75 list is the most efficient way to prepare for coding interviews.
              Engineers who complete it report a <strong>3x higher</strong> interview success rate.
              <a href="/roadmap" className="win-link ml-1">View Roadmap &raquo;</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
