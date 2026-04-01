'use client';

export default function CTA() {
  return (
    <section className="w-full px-4 md:px-6 pb-4 font-sans bg-[#d4d0c8]">
      {/* Win2000 Dialog box style CTA */}
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
          <span className="text-[10px]">&#9888;</span>
          <span className="font-bold text-[11px] flex-1">NeetCode Setup - License Agreement</span>
          <div className="flex items-center gap-1">
            <button aria-label="Close" className="w-[16px] h-[14px] bg-[#d4d0c8] text-black text-[11px] flex items-center justify-center"
              style={{ borderStyle: 'solid', borderWidth: '2px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#404040', borderBottomColor: '#404040' }}>
              <span>&#x2715;</span>
            </button>
          </div>
        </div>

        {/* Dialog content */}
        <div className="p-4 flex flex-col lg:flex-row gap-4">
          {/* Left: text block */}
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0"
                style={{
                  borderStyle: 'solid', borderWidth: '2px',
                  borderTopColor: '#808080', borderLeftColor: '#808080',
                  borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
                }}
              >
                <span style={{ fontSize: '24px' }}>&#9888;</span>
              </div>
              <div>
                <h2 className="text-[16px] font-bold text-black leading-tight mb-1">
                  Start Practicing for Free
                </h2>
                <p className="text-[11px] text-[#444] leading-relaxed">
                  The best resources for coding interviews. Period.
                  Hating leetcode is mandatory.
                </p>
              </div>
            </div>

            {/* License text area */}
            <div
              className="bg-white p-3 text-[11px] mb-3"
              style={{
                borderStyle: 'solid', borderWidth: '2px',
                borderTopColor: '#808080', borderLeftColor: '#808080',
                borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
                height: '140px', overflowY: 'auto',
                fontFamily: 'Courier New, monospace',
              }}
            >
              <p className="font-bold mb-2">NEETCODE END-USER LICENSE AGREEMENT</p>
              <p className="mb-1">By using NeetCode you agree to:</p>
              <p className="ml-2">1. Organized study plans: Blind 75, NeetCode 150, NeetCode 250</p>
              <p className="ml-2">2. Detailed video explanations for every problem</p>
              <p className="ml-2">3. Track your progress and stay motivated</p>
              <p className="ml-2">4. Join our public Discord community</p>
              <p className="ml-2">5. Never give up on your dream job</p>
              <p className="mt-2 text-[#808080]">
                This software is provided &quot;as is&quot; without warranty. NeetCode is not responsible
                for any failed interviews caused by insufficient practice or leetcode rage-quitting.
              </p>
            </div>

            {/* Checkbox acceptance */}
            <div className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                id="accept-terms"
                className="w-3 h-3 cursor-pointer"
                style={{ accentColor: '#0058b4' }}
              />
              <label htmlFor="accept-terms" className="text-[11px] cursor-pointer">
                I accept the terms in the License Agreement
              </label>
            </div>
          </div>

          {/* Vertical separator */}
          <div className="hidden lg:block w-px bg-[#808080]" />

          {/* Right: buttons */}
          <div className="flex flex-col items-center justify-center gap-3 lg:w-[200px]">
            <button
              className="win-btn-primary w-full text-[11px] py-2 text-center"
              onClick={() => window.location.href = '/practice'}
            >
              &gt; Start Practicing
            </button>
            <button
              className="win-btn w-full text-[11px] py-2 text-center"
              onClick={() => window.location.href = '/roadmap'}
            >
              View Roadmap
            </button>
            <button
              className="win-btn w-full text-[11px] py-2 text-center"
              onClick={() => window.location.href = '/discord'}
            >
              Join Discord
            </button>
            <div className="win-separator w-full" />
            <button className="win-btn w-full text-[11px] py-1.5">
              Cancel
            </button>
            <button className="win-btn w-full text-[11px] py-1.5">
              Back
            </button>
          </div>
        </div>

        {/* Progress indicator at bottom */}
        <div
          className="px-4 py-2 flex items-center gap-2 border-t border-[#808080]"
          style={{ background: '#d4d0c8' }}
        >
          <span className="text-[11px]">Setup progress:</span>
          <div
            className="flex-1 h-4 bg-white"
            style={{
              borderStyle: 'solid', borderWidth: '1px',
              borderTopColor: '#808080', borderLeftColor: '#808080',
              borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
            }}
          >
            <div
              className="h-full bg-[#316ac5] flex items-center justify-end pr-1"
              style={{ width: '30%' }}
            >
              <span className="text-white text-[9px]">30%</span>
            </div>
          </div>
          <span className="text-[11px] text-[#444]">Step 1 of 3</span>
        </div>
      </div>

      <div className="mt-4 win-separator" />
    </section>
  );
}
