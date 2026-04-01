'use client';

import { COMPANY_LOGOS } from '@/lib/constants';

export default function Founder() {
  return (
    <section className="w-full px-4 md:px-6 pb-6 font-sans bg-[#d4d0c8]">
      {/* Win2000 "About" dialog */}
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
          <span className="text-[10px]">&#128100;</span>
          <span className="font-bold text-[11px] flex-1">About NeetCode - Founder Story</span>
          <div className="flex items-center gap-1">
            <button aria-label="Close" className="w-[16px] h-[14px] bg-[#d4d0c8] text-black text-[11px] flex items-center justify-center"
              style={{ borderStyle: 'solid', borderWidth: '2px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#404040', borderBottomColor: '#404040' }}>
              <span>&#x2715;</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col lg:flex-row gap-4">
          {/* Left: founder image in a frame */}
          <div className="lg:w-[240px] shrink-0 flex flex-col items-center gap-2">
            <div
              className="w-full overflow-hidden"
              style={{
                borderStyle: 'solid', borderWidth: '2px',
                borderTopColor: '#808080', borderLeftColor: '#808080',
                borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
              }}
            >
              <img
                src="/founder.png"
                alt="Navi - Founder of NeetCode"
                className="w-full object-cover"
                style={{ maxHeight: '280px', objectPosition: 'top' }}
              />
            </div>
            {/* Image caption label */}
            <div
              className="w-full bg-[#0a246a] text-white text-center py-1 text-[10px]"
            >
              Navi - Founder &amp; CEO
            </div>

            {/* Previously at section */}
            <div
              className="w-full bg-[#d4d0c8] p-2"
              style={{
                borderStyle: 'solid', borderWidth: '1px',
                borderTopColor: '#808080', borderLeftColor: '#808080',
                borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
              }}
            >
              <p className="text-[10px] font-bold text-[#0058b4] mb-2">Previously employed at:</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-white px-2 py-1" style={{ border: '1px solid #808080' }}>
                  <img src={COMPANY_LOGOS.google} alt="Google" className="h-4 w-auto" style={{ filter: 'brightness(0)' }} />
                  <span className="text-[10px]">Google</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-2 py-1" style={{ border: '1px solid #808080' }}>
                  <img src={COMPANY_LOGOS.amazon} alt="Amazon" className="h-4 w-auto" style={{ filter: 'brightness(0)' }} />
                  <span className="text-[10px]">Amazon</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-2 py-1" style={{ border: '1px solid #808080' }}>
                  <img src={COMPANY_LOGOS.capitalOne} alt="Capital One" className="h-6 w-auto" style={{ filter: 'brightness(0)' }} />
                  <span className="text-[10px]">Capital One</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: story text */}
          <div className="flex-1">
            <div
              className="px-3 py-1 text-[11px] font-bold text-white mb-3"
              style={{ background: '#316ac5' }}
            >
              &#128100; About the Founder
            </div>

            <h2 className="text-[18px] font-bold text-black mb-3">Hi, I&apos;m Navi</h2>

            {/* Text in a "document" style sunken area */}
            <div
              className="bg-white p-3 text-[11px] leading-relaxed mb-4 flex flex-col gap-2"
              style={{
                borderStyle: 'solid', borderWidth: '2px',
                borderTopColor: '#808080', borderLeftColor: '#808080',
                borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
                fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
              }}
            >
              <p>I created NeetCode in 2020 when I was unemployed and couldn&apos;t find a job.</p>
              <p>While I was struggling myself, it was still rewarding for me to make videos.</p>
              <p>
                I received so many messages from others who got jobs after studying with my videos.
                It felt so gratifying and kept me motivated.
              </p>
              <p>About a year later I managed to get a job at Google.</p>
            </div>

            {/* Win2000 system info style grid */}
            <div
              className="bg-[#d4d0c8] p-2"
              style={{
                borderStyle: 'solid', borderWidth: '1px',
                borderTopColor: '#808080', borderLeftColor: '#808080',
                borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
              }}
            >
              <p className="text-[10px] font-bold mb-1 text-[#0058b4]">System Information</p>
              <table className="win-table text-[10px]">
                <tbody>
                  <tr>
                    <td className="font-bold pr-4 text-[#444]">Founded:</td>
                    <td>2020</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4 text-[#444]">Users:</td>
                    <td>2,000,000+</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4 text-[#444]">Problems:</td>
                    <td>1,000+</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4 text-[#444]">Version:</td>
                    <td>NeetCode Pro 3.0.0</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4 text-[#444]">Platform:</td>
                    <td>Windows 2000 / Internet Explorer 5.5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* OK button */}
            <div className="flex justify-end mt-4">
              <button className="win-btn-primary text-[11px] px-8 py-2">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 win-separator" />
    </section>
  );
}
