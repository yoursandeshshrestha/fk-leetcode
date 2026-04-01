'use client';

import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="w-full px-4 md:px-6 pb-4 font-sans bg-[#d4d0c8]">
      {/* Win2000 Window */}
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
          <span className="text-[10px]">&#128172;</span>
          <span className="font-bold text-[11px] flex-1">Success Stories - User Testimonials (6 items)</span>
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

        {/* Toolbar */}
        <div className="win-menubar px-1 gap-1">
          <button className="win-btn text-[11px] py-0.5 px-2">Sort by Name</button>
          <button className="win-btn text-[11px] py-0.5 px-2">Sort by Company</button>
          <div className="flex-1" />
          <span className="text-[11px] text-[#808080] mr-2">Showing 1-6 of 2,000,000+ success stories</span>
        </div>

        {/* Content area with classic Win2000 list view */}
        <div className="p-2 bg-[#d4d0c8]">
          {/* Section heading */}
          <div
            className="mb-2 px-3 py-1 bg-[#316ac5] text-white text-[11px] font-bold flex items-center gap-2"
          >
            <span>&#128203;</span>
            <span>See how NeetCode helped engineers land their dream jobs</span>
          </div>

          {/* Testimonials as classic Win2000 "Details" list view */}
          <div
            className="bg-white"
            style={{
              borderStyle: 'solid', borderWidth: '2px',
              borderTopColor: '#808080', borderLeftColor: '#808080',
              borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
            }}
          >
            {/* Column headers */}
            <div
              className="flex items-center border-b border-[#808080]"
              style={{ background: '#d4d0c8' }}
            >
              <div className="w-8 text-[10px] font-bold p-1 border-r border-[#808080]">#</div>
              <div
                className="w-[150px] shrink-0 text-[10px] font-bold p-1 border-r border-[#808080]"
                style={{ borderStyle: 'solid', borderWidth: '1px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#808080', borderBottomColor: '#808080' }}
              >
                Name
              </div>
              <div
                className="w-[120px] shrink-0 text-[10px] font-bold p-1 border-r border-[#808080]"
                style={{ borderStyle: 'solid', borderWidth: '1px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#808080', borderBottomColor: '#808080' }}
              >
                Company
              </div>
              <div
                className="flex-1 text-[10px] font-bold p-1"
                style={{ borderStyle: 'solid', borderWidth: '1px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#808080', borderBottomColor: '#808080' }}
              >
                Testimonial
              </div>
            </div>

            {/* Rows */}
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`flex items-start border-b border-[#e8e8e8] cursor-pointer hover:bg-[#316ac5] hover:text-white group ${i % 2 === 0 ? 'bg-white' : 'bg-[#eef3fb]'}`}
              >
                <div className="w-8 text-[10px] p-1.5 border-r border-[#e8e8e8] shrink-0 text-center group-hover:border-[#316ac5]">
                  {i + 1}
                </div>
                <div className="w-[150px] shrink-0 p-1.5 border-r border-[#e8e8e8] group-hover:border-[#316ac5]">
                  <div className="flex items-center gap-1">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-5 h-5 rounded-full object-cover shrink-0"
                        style={{ border: '1px solid #808080' }}
                      />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-[#316ac5] flex items-center justify-center shrink-0">
                        <span className="text-white text-[8px] font-bold">
                          {t.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </span>
                      </div>
                    )}
                    <span className="text-[11px] font-bold truncate">{t.name}</span>
                  </div>
                </div>
                <div className="w-[120px] shrink-0 p-1.5 border-r border-[#e8e8e8] group-hover:border-[#316ac5]">
                  <div className="flex items-center gap-1">
                    {t.companyLogo && (
                      <img
                        src={t.companyLogo}
                        alt={t.company}
                        className="h-3 w-auto group-hover:brightness-0 group-hover:invert"
                        style={{ filter: 'brightness(0)' }}
                      />
                    )}
                    <span className="text-[11px] truncate">{t.company}</span>
                  </div>
                </div>
                <div className="flex-1 p-1.5">
                  <p className="text-[11px] leading-relaxed line-clamp-2">{t.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-panel flex-1">{testimonials.length} object(s)</div>
          <div className="win-statusbar-panel px-4">Selected: 0</div>
        </div>
      </div>

      <div className="mt-4 win-separator" />
    </section>
  );
}
